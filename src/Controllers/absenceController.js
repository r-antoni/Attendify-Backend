const {absence} = require('../Models')

const absenceapp = async(req, res) =>{
    
    const {student ,reson, duration } = req.body

    // console.log(req.body)

    if(!student || !reson || !duration){
        return res.status(400).send({
            msg: 'Application gagal dikirim'
        })
    }
    const input = await absence.create({
        student_id: student,
        reason:reson,
        duration :duration
    })

    return res.status(201).send({
        msg: 'Application succes sending' 
    })
}
const accept = async( res, req) =>{
        try {
           const iduser = req.user.id
           const {status} = req.body

           const updatestatus = await absence.update({
            status : status
           }, {where:{id: iduser}})

           const data = await usernew.findOne({
            where: {id: iduser}
           })
            res.status(201).send({
                msg: 'status update',
                data: data
            })
        } catch (error) {
            console.log(error)
            return res.send({
                msg: 'error accured',
                data: error
            })
        }
}

module.exports = {absenceapp, accept}