const Task = require('../models/task');

const createTask = async (req, res) => {
  try {
    const task = await  Task.create(req.body)
   
    res.status(200).json({
      status:'success',
      data:{
        task
      }
      
    })
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
};








// פונקציה לקבלת כל המשימות
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTaskById = async (req,res)=>{
try{
    const task = await Task.findById(req.params.id)
    if (!task) {
    return res.status(404).send({ message: 'Task not found' })};
    res.send(task);
    }catch (error){
        res.status(500).send(error);
    }
};


// פונקציה לעדכון משימה לפי מזהה
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

// פונקציה למחיקת משימה לפי מזהה
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};
