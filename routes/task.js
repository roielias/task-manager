// routes/tasks.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task'); // שים לב למיקום המדויק של הקונטרולר

// הגדרת המסלולים עם הפונקציות המתאימות
router.post('/', taskController.createTask); // מטפל בבקשות POST ל-/tasks
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById); // תיקון לנתיב נכון
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
