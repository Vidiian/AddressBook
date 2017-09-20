const express = require('express');

const router = express.Router();
const query = { type: 'contact' };

/* GET contacts listing. */
router.get('/', (req, res) => {
  const mask = { type: 0 };
  res.app.locals.db.find(query, mask, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no contacts found');
    }
  });
});

/* DELETE all existing contacts */
router.delete('/', (req, res, next) => {
  res.app.locals.db.remove(query, { multi: true }, (err, removedCount) => {
    if (err) next();
    res.json({ message: `removed ${removedCount} records` });
  });
});

module.exports = router;
