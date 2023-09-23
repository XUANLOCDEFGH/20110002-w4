const Student = require('../models/group')

function changeNullValue(data) {
    if (!data) {
        return 'Not valid'
    }
    return data
}

exports.checkBody = (req, res, next) => {
    if (req.is('json')) {
        next();
    } else {
        res.status(400).json({ error: 'Not valid' });
    }
};

exports.getAllStudents = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: { Student }
    })

}

exports.getStudent = (req, res) => {
    const Id_check = Student.find(el => el.id === req.params.id)
    res.status(400).json({
        status: 'success',
        data: { Id_check }
    })
}

exports.createStudent = (req, res) => {
    const Id_check = Student.find(el => el.id === req.params.id)
    if (!Id_check) {
        const newStudent = Object.assign({}, { id: req.params.id }, req.body);
        Student.push(newStudent);
        res.status(200).json({
            status: 'success',
            data: { Student }
        })
    }
    else {
        res.status(400).json({
            status: 'Fail',
            message: 'Not valid'
        })
    }
}

exports.getMessagge = (req, res) => {

    const Id_check = Student.find(el => el.id === req.params.id)
    if (Id_check) {
        res.status(200).send(`<html><body><ul>${checkId.name}</ul></body></html>`)
    }
    else {
        const a = Student.map(el => changeNullValue(el.name))
        res.status(400).send(`<html><body><ul>${a}</ul></body></html>`)
    }
}

exports.getMessageNotId = (req, res) => {

    const a = Student.map(el => changeNullValue(el.name))
    res.status(400).send(`<html><body><ul>${a}</ul></body></html>`)

}