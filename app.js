'use strict';

var express = require('express');
var server = express();
var logger = require('morgan');

server.use(logger('dev'));

server.use(express.static(__dirname+'/'));

server.listen(4000, function(){
    console.log('Server file sudah berjalan bos!');
});
