// const catchAsync = require('./../utlis/catchAsync');
// const AppError = require('./../utlis/appError');
// const APIFeatures = require('./../utlis/apiFeatures');
// exports.deleteOne = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const doc = await Model.findByIdAndDelete(req.params.id); // hna findByIdAndDelete btms7 al user mn al database
//     if (!doc) {
//       return next(new AppError('No document found with that ID', 404));
//     }
//     res.status(204).json({
//       status: 'success',
//       data: null,
//     });
//   });

// exports.updateOne = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!doc) {
//       return next(new AppError('No document found with that ID', 404));
//     }
//     res.status(200).json({
//       status: 'success',
//       data: {
//         data: doc,
//       },
//     });
//   });

// exports.createOne = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const doc = await Model.create(req.body);
//     res.status(201).json({
//       status: 'success',
//       data: {
//         data: doc,
//       },
//     });
//   });

// exports.getOne = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const query = Model.findOne({ username: req.params.username });
//     const doc = await query;

//     if (!doc) {
//       return next(new AppError('No document found with that ID', 404));
//     }

//     res.status(200).json({
//       status: 'success',
//       data: {
//         data: doc,
//       },
//     });
//   });

// exports.getAll = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const doc = await Model.find();

//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       // requestedAt: req.requestTime ,
//       results: doc.length,
//       data: {
//         data: doc,
//       },
//     });
//   });
