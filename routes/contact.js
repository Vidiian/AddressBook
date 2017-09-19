const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/:userid', (req, res) => {
  const query = { type: 'user', _id: req.params.userid };
  res.app.locals.db.find(query, (err, docs) => {
    if (docs.length > 0) {
      res.send(docs);
    } else {
      res.send('no users found');
    }
  });
});

/* POST a new user */
router.post('/', (req, res, next) => {
  const user = { ...req.body, type: 'user' };
  res.app.locals.db.insert(user, (err, newRecord) => {
    if (err) next();
    /* eslint-disable no-underscore-dangle */
    res.json({ message: `Added user: ${newRecord._id}` });
    /* eslint-enable no-underscore-dangle */
  });
});

/* PUT an update to a user */
router.put('/:userid', (req, res, next) => {
  const update = { $set: { ...req.body } };
  res.app.locals.db.update({ _id: req.params.userid }, update, (err, numReplaced) => {
    if (err) next();
    res.json({ message: `Updated ${numReplaced} fields for user: ${req.params.userid}` });
  });
});

/* DELETE  a specified user */
router.delete('/:userid', (req, res, next) => {
  res.app.locals.db.remove({ _id: req.params.userid }, {}, (err, removedCount) => {
    if (err) next();
    res.json({ message: `removed ${removedCount} record` });
  });
});

module.exports = router;
