var express = require('express');
var router = express.Router();

const messages =  [
  {
    text: "Hello world!",
    user: "Bobby",
    added: new Date()
  },
  {
    text: "I'm here!",
    user: "Sally",
    added: new Date()
  },
  {
    text: "Allow me to introduce myself",
    user: "Billy",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a message' });
})

router.post('/new', function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.author;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  next();
  res.redirect('/');
})

module.exports = router, messages;
