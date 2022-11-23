const { json } = require('express');
const express =require('express');
const morgan =require('morgan');

const taskRoutes=require('./routes/tasks.routes');

const app=express();

app.use(morgan('dev'))
app.use(express.json())

app.use(taskRoutes);

app.listen(8000)

// 44:19
// https://www.youtube.com/watch?v=_zGL_MU29zs