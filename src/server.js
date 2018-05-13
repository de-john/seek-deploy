const express = require("express");

const cn  = {
    host: 'ec2-23-23-142-5.compute-1.amazonaws.com',
    port: 5432,
    database: 'd571cnir80d2f1',
    user: 'xohnlkgrsvrkvq',
    password: '63c064586b7164bf9e64063b54f1a1e0abbbcd3ebe5ae717f2b832fb093e238b',
    ssl: true
};

'use strict';

const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(cn); // database instance;

db.any("select * from users WHERE users.shelterid = 3", [true])
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    })
    .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
// For details see: https://github.com/vitaly-t/pg-promise#library-de-initialization