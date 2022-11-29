const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require("cors")

const taskRoutes = require('./routes/tasks.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(8000)

// 1:34
// https://www.youtube.com/watch?v=_zGL_MU29zs