// const express = require('express');
// const authController = require('../controllers/authController');
// const userController = require('../controllers/userCondroller');
// const tweetsRouter = require('./tweetRoutes');

// const router = express.Router();

// const { signUp, login, logout, protect, restrictTo } = authController;

// const {
//   updateMe,
//   getMe,
//   getUser,
//   deleteMe,
//   getAllUsers,
//   updateUser,
//   deleteUser,
// } = userController;

// router.route('/signup').post(signUp);
// router.route('/signin').post(login);
// router.route('/logout').get(protect, logout);

// router.use('/:username/tweets', tweetsRouter);

// router.route('/me').get(protect, getMe, getUser);

// router.route('/delete-me').delete(protect, deleteMe); // al delete deh al user mes7ha bs msh bttms7 mn al mongoDb (database ) bektb anha msh active (active : false)

// router.route('/:username').get(getUser);

// // router.use(authController.restrictTo('admin'));

// router.route('/').get(getAllUsers);
// router.route('/update-me').patch(protect, updateMe);

// // router
// //   .route('/:id')
// //   .patch(protect, restrictTo, updateUser)
// //   .delete(protect, restrictTo, deleteUser);
// router.route('/:id').patch(updateUser).delete(deleteUser); // al delete deh bttsm7 mn al mongoDB (database )

// module.exports = router;
const express = require('express');
const {
  getMe,
  getUser,
  signup,
  login,
  deleteUser,
  editProfile,
  protect,
  signout,
  getAllusers,
  uploadUserPhoto,
  resizeUserCoverImage,
  resizeUserProfileImage,
} = require('../controllers/userCondroller');

const router = express.Router();
router.route('/getAllusers').get(getAllusers);
router.route('/getMe').get(protect, getMe);
router.route('/getUser/:userName').get(protect, getUser);
router
  .route('/editProfile')
  .post(
    protect,
    uploadUserPhoto,
    resizeUserProfileImage,
    resizeUserCoverImage,
    editProfile
  );
router.route('/deleteMe').delete(protect, deleteUser);
router.route('/signout').get(protect, signout);
router.route('/signup').post(signup);
router.route('/login').post(login);

module.exports = router;
