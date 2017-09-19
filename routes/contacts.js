const express = require('express');

const router = express.Router();
const query = { type: 'user' };

/* GET users listing. */
router.get('/', (req, res) => {
  const mask = { type: 0 };
  res.app.locals.db.find(query, mask, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no users found');
    }
  });
});

/* DELETE all existing users */
router.delete('/', (req, res, next) => {
  res.app.locals.db.remove(query, { multi: true }, (err, removedCount) => {
    if (err) next();
    res.json({ message: `removed ${removedCount} records` });
  });
});

module.exports = router;
