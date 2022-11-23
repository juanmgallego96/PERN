const pool = require('../db')


const getAllTasks=async(req, res)=>{
    res.send('Retrieveing a tasks list');
}
const getTask=(req,res)=>{
    res.send('Retrieveing a task');
}
const createTask=async(req,res)=>{
    const {title,description}=req.body
    const result=await pool.query('INSERT INTO tasks (title,description) VALUES ($1,$2) RETURNING *',[title,description])
    res.json()
}
const deleteTask=(req,res)=>{
    res.send('Deleting a task');
}
const updateTask=(req,res)=>{
    res.send('Updating a task');
}

module.exports={
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}