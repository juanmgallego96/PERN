const pool = require('../db')


const getAllTasks=async(req, res)=>{
    try {
        const allTasks=await pool.query('SELECT * FROM tasks')
        console.log(allTasks)
        res.json(allTasks.rows);
    } catch (error) {
        res.json({error:error.message})
    }

}
const getTask=async(req,res)=>{
    try {
        const {id}=req.params;
    
        const result=await pool.query('SELECT * FROM tasks WHERE id=$1',[id])
    
        if (result.rows.length===0) 
        return res.status(404).json({
            message:"Task not found"
        });
        res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
}
const createTask=async(req,res)=>{
    const {title,description}=req.body

    try {
        const result=await pool.query('INSERT INTO tasks (title,description) VALUES ($1,$2) RETURNING *',[title,description])
        res.json(result.rows[0])
    } catch (error) {
        res.json({error:error.message})
    }
}
const deleteTask=async(req,res)=>{
    const {id}=req.params;
    try {
        const result=await pool.query('DELETE FROM tasks WHERE id= $1 RETURNING *',[id])

        if (result.rowCount===0) 
        return res.status(404).json({
            message:"Task not found"
        });
        res.sendStatus(204)

    } catch (error) {
        console.log(error.message)
    }
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