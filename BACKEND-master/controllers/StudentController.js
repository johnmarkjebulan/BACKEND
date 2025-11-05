import * as studentModel from '../models/studentmodel.js';

export const fetchStudent = async (req, res) => {

    try {
        const student = await studentModel.getStudent();
        res.status(200).json({success: true, message: student});
    } catch(e) {
        comsole.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
,        })

    }
}


export const createStudent = async (req, res) => {
    const {Name, srcode, course} = req.body;  

    try {
        const insertId = await StudentModel.insertStudent(Name, srcode, course);
        res.status(200).json({success: true, message: insertId})
    } catch(e) {
        console.log(e);
        res.status(500).json({ success: false, message:"Internal Server Error"})

    }
}
