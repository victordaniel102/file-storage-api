const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post('/upload', multer(multerConfig).single('file'), async (req, res) => {
    const post = { originalname: name, size, key, location: url = "" } = req.file;
    
    res.send(post);
});

module.exports = routes;