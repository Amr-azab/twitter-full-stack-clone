// const express = require('express');
// const authController = require('../controllers/authController');
// const TweetController = require('../controllers/tweetController');

// const router = express.Router({ mergeParams: true });

// const { protect } = authController;

// const { addTweet, getTweets } = TweetController;

// router.route('/').get(getTweets).post(protect, addTweet);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { protect } = require('../controllers/userCondroller');
const {
  createTweet,
  getMyTweets,
  getUserTweets,
  getAllTweets,
  uploadTweetPhoto,
  resizeTweetImage,
} = require('../controllers/tweetController');

router
  .route('/createTweet')
  .post(protect, uploadTweetPhoto, resizeTweetImage, createTweet);
router.route('/getMyTweets').get(protect, getMyTweets);
router.route('/getUserTweets/:userName').get(protect, getUserTweets);
router.route('/getAllTweets').get(protect, getAllTweets);

module.exports = router;
