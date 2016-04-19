var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});
router.post('/post',function(req,res){
  var email= req.param("email");
  var password= req.param("password");
  if(email == "admin" && password == "pass") {
    console.log("login success");
    res.send("success");
  }
  else if(email.data != "admin"){
    res.send("invalid username");
  }
  else if(password.data!= "pass"){
    res.send("wrong password");
  }
});
module.exports = router;
