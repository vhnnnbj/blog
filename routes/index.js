var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', { title: 'IndexPage' });
    });
    app.get('/reg', function(req, res) {
        res.render('reg', { title: 'Register' });
    });
    app.post('/reg', function(req, res) {});
    app.get('/login', function(req, res) {
        res.render('login', { title: 'Login' });
    });
    app.post('/login', function(req, res) {});
    app.get('/post', function(req, res) {
        res.render('post', { title: 'Publish' });
    });
    app.post('/post', function(req, res) {});
    app.get('/logout', function(req, res) {});
};
