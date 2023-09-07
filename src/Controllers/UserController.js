const {users} = require('../Models')
const bcrypt = require('bcryptjs')

const register = async(req, res) =>{
    
    const { username , email, password } = req.body

    // console.log(req.body)

    if(!username || !email || !password){
        return res.status(400).send({
            msg: 'Gagal Buat Akun'
        })
    }

    const hashedPassword = bcrypt.hashSync(password, 8)

    const input = await users.create({
        username: username,
        email: email,
        password:hashedPassword
    })

    return res.status(201).send({
        msg: 'user reqister succes' 
    })
}

module.exports = {register}