var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

const connectionString  = {
    host: 'ec2-23-23-142-5.compute-1.amazonaws.com',
    port: 5432,
    database: 'd571cnir80d2f1',
    user: 'xohnlkgrsvrkvq',
    password: '63c064586b7164bf9e64063b54f1a1e0abbbcd3ebe5ae717f2b832fb093e238b',
    ssl: true
};

var pgp = require('pg-promise')(options);
var db = pgp(connectionString);

// add query functions

module.exports = {
  getShelterInfo: getShelterInfo,
//   getSinglePuppy: getSinglePuppy,
//   createPuppy: createPuppy,
//   updatePuppy: updatePuppy,
//   removePuppy: removePuppy
};

function getShelterInfo(req, res, next) {
    db.any('select * from shelters Where shelter_id=1')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL puppies'
          });
          console.log(data);
      })
      .catch(function (err) {
        return next(err);
      });
  }
  