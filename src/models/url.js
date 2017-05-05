const db = require('./db');

//exports new url into database
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

//finds all urls in database
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

// gets a genre by specific ID in database
exports.find = (payload, err, success) => {
  db.url.find({
    where: { id: payload.id },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// deletes a genre by specific ID in database
exports.destroy = (payload, err, success) => {
  db.url.find({
    where: { id: payload.id },

  }).then(success).catch(err);
};

// updates a genre by specific ID in database
exports.update = (payload, err, success) => {
  db.url.find({ where: { id: payload.id },
  }).then((updatingData) => {
    updatingData.updateAttributes(payload).then(success).catch(err);
  }) .catch(err);
};
