const express = require('express');
const groupController = require(`../controllers/group.js`);
const router = express.Router();

router
  .route('/')
  .get(groupController.getAllStudents)

router
  .route('/mssv/:id')
  .get(groupController.getStudent)
  .post(groupController.checkBody, groupController.createStudent)

router
  .route('/message/:id')
  .get(groupController.getMessagge)

router
  .route('/message')
  .get(groupController.getMessageNotId)

module.exports = router;