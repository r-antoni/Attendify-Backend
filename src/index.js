require('dotenv').config();
const express = require('express');
const PORT =  process.env.SERVER_PORT;
const cors = require('cors')
const {sequelize} = require('./Models')
const userRouter = require('./Routes/UserRoute')

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
app.use('/api/user', userRouter)

app.listen(PORT, () =>{
    console.log(`listen at localhost:${PORT}`)
})
