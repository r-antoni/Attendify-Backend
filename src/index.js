require('dotenv').config();
const express = require('express');
const PORT =  process.env.SERVER_PORT;
const cors = require('cors')
const {sequelize} = require('./Models')
const teacherRouter = require('./Routes/teacherRoutes')
const studentRouter = require('./Routes/studentRoutes')
const adminRouter = require('./Routes/adminRoutes')
const userrouter = require('./Routes/userRoutes')
const absenceRouter = require('./Routes/absenceRoutes')


const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}))


sequelize.authenticate().then(function(error){
    console.log('database connect succesfully')
}).catch(function(error){
    console.log('unablecto connect database' + error)
})

app.get("/home", (req, res) =>{
    res.send({

    })
})
app.use('/api/user' , userrouter)
app.use('/api' , adminRouter)
app.use('/api/teachers' , teacherRouter)
app.use('/api/students' , studentRouter)
app.use('/api/absence', absenceRouter)

app.listen(PORT, () =>{
    console.log(`listen at localhost:${PORT}`)
})
