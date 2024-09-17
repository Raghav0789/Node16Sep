// const mongoose = require('mongoose');
// const student = require('../models/student');
const Student = require('../models/student');

async function addStudent(req,res){
    try {
        console.log(req.body,'req.body');
        
        let student = new Student(req.body);
        await student.save();
        console.log("Data is saved successfully.....");
        res.end("Added....")
        
    } catch (err) {
        console.log(err);
        
    }
}

async function getStudents(req,res){
    try {
        let students = await Student.find({});
        console.log(students,'students');
        res.send(students);
        
    } catch (err) {
        console.log(err);
        
    }
}

async function getStudent(req,res){
    try {
        let rollno = parseInt(req.params.rollNo);
        console.log(rollno,'rollno');
        
        let student = await Student.findOne({rollNo:rollno});
        console.log(student,'student');
        res.send(student);
        
    } catch (err) {
        console.log(err);
        
    }
}


module.exports = {
    addStudent,
    getStudents,
    getStudent
}
