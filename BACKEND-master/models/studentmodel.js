import pool from './db.js';

export const getStudent = async () =>{
    const[rows] = await pool.query("SELECT * FROM tblstudent");
        return rows;
}

export const insertStudent = async (Name, srcode, course) => {
    const [result] = await pool.query(
    "INSERT INTO tblstudent(Name, srcode, course) VALUES(?,?,?)",
[Name, srcode, course, studentId]
    );
    return result.insertId;

}
export const updateStudent = async (Name, srcode, course, studentId) => {
    const [result] = await pool.query(
        "UPDATE tblbook SET Name = ?, srcode = ?, course = ? WHERE Id = ?",
        [Name, srcode, course, studentId]
    );
    return result.affectedRows;

}

export const deleteStudent = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE Id = ?", [studentId]
    );
    return result.affectedRows;
}