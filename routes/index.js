var express = require('express');
var router = express.Router();
//var noodle= require('noodlejs');
var fs=require('fs');
var request=require('request');
var cheerio=require('cheerio');
var path=require('path');

//basic example
/*var url="http://google.com";
request(url,function(err,resp,body){
   if(err) {
       console.log(err);
   }
   else {
       console.log(body);
   }

})*/

//save into file
/*var destination = fs.createWriteStream('google2.html');
var url="http://google.com";
request(url)
    .pipe(destination)
    .on('finish',function(){
      console.log('done');
    })
    .on('error',function(){
      console.log(err);
    })*/
var text;
var url="http://www.w3schools.com/js/";
request(url,function(err,res,body){
  var $ = cheerio.load(body);
   var result=$('.color_h1');
    text=result.text();
   console.log("data");
   console.log(text);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: text });
});

module.exports = router;
