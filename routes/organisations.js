const express = require('express');

const router = express.Router();

/* GET organisations listing. */
router.get('/', (req, res) => {
  const mask = { type: 0 };
  res.app.locals.db.find({ type: 'organisation' }, mask, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no organisations found');
    }
  });
});

/* DELETE all existing organisations */
router.delete('/', (req, res, next) => {
  res.app.locals.db.remove(
    { $or: [{ type: 'organisation' }, { type: 'contact' }] },
    { multi: true },
    (err, removedCount) => {
      if (err) next();
      res.json({ message: `removed ${removedCount} records` });
    },
  );
});

module.exports = router;
