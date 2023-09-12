const {user} = require('../Models')
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).send({
                msg: "some field be filled, cannnot be empty"
            })
        }

        const getUser = await user.findOne({
            where: {email : email}
        })
       
        if(!getUser){
            return res.status(404).send({
                msg:'User ' + email + ' not found'
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

module.exports = {login}