const express = require('express');

const router = express.Router();

/* GET organisations listing. */
router.get('/:organisationid', (req, res) => {
  const query = { type: 'organisation', _id: req.params.organisationid };
  res.app.locals.db.find(query, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no organisations found');
    }
  });
});

/* POST a new organisation */
router.post('/', (req, res, next) => {
  const organisation = { ...req.body, type: 'organisation' };
  res.app.locals.db.insert(organisation, (err, newRecord) => {
    if (err) next();
    /* eslint-disable no-underscore-dangle */
    res.json({ message: `Added organisation: ${newRecord._id}` });
    /* eslint-enable no-underscore-dangle */
  });
});

/* PUT an update to a organisation */
router.put('/:organisationid', (req, res, next) => {
  const update = { $set: { ...req.body } };
  res.app.locals.db.update({ _id: req.params.organisationid }, update, (err, numReplaced) => {
    if (err) next();
    res.json({ message: `Updated ${numReplaced} fields for organisation: ${req.params.organisationid}` });
  });
});

/* DELETE  a specified organisation */
router.delete('/:organisationid', (req, res, next) => {
  const organisationId = req.params.organisationid;
  res.app.locals.db.remove(
    { $or: [{ _id: organisationId }, { organisation: organisationId }] },
    { multi: true },
    (err, removedCount) => {
      if (err) next();
      res.json({ message: `removed ${removedCount} record` });
    },
  );
});

module.exports = router;
