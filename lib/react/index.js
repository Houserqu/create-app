var fs = require('fs');
var path = require("path")
var copyDir = require('../utils/copyDir');

function create(){
    console.log('react');
    console.log(path.resolve());
    // copyDir('./src', './new', function(err){
    //     if(err){
    //       console.log(err);
    //     }
    //   })
}

module.exports =  create;