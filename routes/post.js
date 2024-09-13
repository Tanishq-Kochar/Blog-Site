const path = require('path');
const express = require('express');
const router = express.Router();


const postController = require('../controller/post');
// get methods
router.get('/new',postController.getNew);
router.get('/read/:id',postController.getReadPage);
router.get('/edit/:id',postController.getEditPage);
router.get('/delete/:id',postController.getDeletePost);

// post methods
router.post('/new',postController.postNew);
router.post('/edit',postController.postEdit);

module.exports = router;