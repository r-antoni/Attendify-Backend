const {users} = require('../Models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async(req, res) =>{
    
    const { username , email, password } = req.body

    // console.log(req.body)

    if(!username || !email || !password){
        return res.status(400).send({
            msg: 'Gagal Buat Akun'
        })
    }

    const hashedPassword = bcrypt.hashSync(password, 8)

    const input = await users.create ({
        username: username,
        email: email,
        password:hashedPassword
    })

    return res.status(201).send({
        msg: 'user reqister succes' 
    })
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body

        if(!username || !password){
            return res.status(400).send({
                msg: "some field be filled, cannnot be empty"
            })
        }

        const getUser = await users.findOne({
            where: {username : username}
        })
       
        if(!getUser){
            return res.status(404).send({
                msg:'User ' + username + ' not found'
            })
        }

        const isValidpassword  = bcrypt.compareSync(password, getUser.dataValues.password)
        
        if(!isValidpassword){
            return res.status(400).send({
                msg:'Invalid Password '
            })
        }

        // const token = jwt.sign({
        //     id: getUser.dataValues.id ,
        //     username: getUser.dataValues.username
        // }, process.env.JWT_SECERT, {expiresIn : 3600})

        return res.status(200).send({
            msg : 'login succes',
            // token : token
        })

    } catch (error) {
        console.log(error)
        return res.send({
            msg: 'error accured',
            data: error
        })
    }
}

module.exports = {register, login}