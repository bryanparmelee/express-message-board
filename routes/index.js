var express = require('express');
var router = express.Router();

const messages =  [
  {
    text: "Click 'Add Your Message' to join the conversation!",
    user: "Admin",
    added: new Date().toLocaleString()
  },
  {
    text: "I'm here!",
    user: "Sally",
    added: new Date().toLocaleString()
  },
  {
    text: "Allow me to introduce myself",
    user: "Billy",
    added: new Date().toLocaleString()
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
  messages.push({ text: messageText, user: messageUser, added: new Date().toLocaleString() });
  next();
  res.redirect('/');
})

module.exports = router, messages;
