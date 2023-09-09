const {student,user} = require('../Models')
const bcrypt = require('bcryptjs')

const create = async(req, res) =>{
    
    const { username , email, password, nohp } = req.body

    // console.log(req.body)

    if(!username || !email || !password || !nohp){
        return res.status(400).send({
            msg: 'Gagal Buat Akun'
        })
    }

    const hashedPassword = bcrypt.hashSync(password, 8)

    const input = await student.create({
        nama: username,
        email: email,
        password:hashedPassword,
        nohp : nohp
    })
    const createuser = await user.create({
        nama: username,
        password:hashedPassword,
        roles: 'student'
    })
    return res.status(201).send({
        msg: 'create students succes' 
    })
}


module.exports = {create}