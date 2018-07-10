const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mvp');

const { connection } = mongoose;

connection.on('open', () => {
  console.log('success connect to the database');
});

mongoose.Promise = global.Promise;

const fetchItem = (date) => {
  return new Promise((resolve, reject) => {
    connection.collection('tracker').find({ date }).toArray((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const saveItem = (data) => {
  return new Promise((resolve, reject) => {
    connection.collection('tracker').save(data, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  fetchItem,
  saveItem,
};
