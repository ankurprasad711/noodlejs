var express = require('express');
var router = express.Router();
var noodle= require('noodlejs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/output',function(req,res,next){
    var query = {
            url: 'http://google.com/search?q=javascript',
            type: 'html',
            selector: 'h3.r a',
            extract: 'text'
        },
        uriQuery = encodeURIComponent(JSON.stringify(query)),
        request  = 'http://example.noodlejs.com/?q=' +
            uriQuery + '&callback=?';

// Make Ajax request to Noodle server
    jQuery.getJSON(request, function (data) {
        alert(data[0].results);
    });

});
module.exports = router;
