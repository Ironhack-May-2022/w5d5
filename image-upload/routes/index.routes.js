const router = require("express").Router();
const Movie = require('../models/Movie')
const { uploader, cloudinary } = require('../config/cloudinary');
const { CloudinaryStorage } = require("multer-storage-cloudinary");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('index', { movies })
    })
    .catch(err => {
      next(err)
    })
});

router.get('/movie/add', (req, res, next) => {
  res.render('movie-add')
});


router.get('/movie/delete/:id', (req, res, next) => {
  //
});


module.exports = router;
