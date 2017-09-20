const express = require('express');

const router = express.Router();

/* GET contacts listing. */
router.get('/:contactid', (req, res) => {
  const query = { type: 'contact', _id: req.params.contactid };
  res.app.locals.db.find(query, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no contacts found');
    }
  });
});

/* POST a new contact */
router.post('/', (req, res, next) => {
  const contact = { ...req.body, type: 'contact' };
  res.app.locals.db.insert(contact, (err, newRecord) => {
    if (err) next();
    /* eslint-disable no-underscore-dangle */
    res.json({ message: `Added contact: ${newRecord._id}` });
    /* eslint-enable no-underscore-dangle */
  });
});

/* PUT an update to a contact */
router.put('/:contactid', (req, res, next) => {
  const update = { $set: { ...req.body } };
  res.app.locals.db.update({ _id: req.params.contactid }, update, (err, numReplaced) => {
    if (err) next();
    res.json({ message: `Updated ${numReplaced} fields for contact: ${req.params.contactid}` });
  });
});

/* DELETE  a specified contact */
router.delete('/:contactid', (req, res, next) => {
  res.app.locals.db.remove({ _id: req.params.contactid }, {}, (err, removedCount) => {
    if (err) next();
    res.json({ message: `removed ${removedCount} record` });
  });
});

module.exports = router;
