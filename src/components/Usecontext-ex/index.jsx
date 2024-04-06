import React from "react";


const students = [
  { no: 1, name: "Guru Arjun", age: 22, role: "Jr.Software Developer" },
  { no: 2, name: "Pavithra", age: 22, role: "Jr.Software Developer" },
  { no: 3, name: "Charan", age: 22, role: "Jr.Software Developer" },
  { no: 4, name: "Kayalvizhi", age: 22, role: "Jr.Software Developer" },
  { no: 5, name: "Nanthini", age: 25, role: "Jr.Software Developer" },
  { no: 6, name: "KrishnaRaj", age: 22, role: "Jr.Software Developer" },
  { no: 7, name: "Shree Mirrah", age: 22, role: "Jr.Software Developer" },
  { no: 8, name: "Prasanth", age: 22, role: "Jr.Software Developer" },
  { no: 9, name: "Praveen", age: 26, role: "Sr.Software Developer" },
  { no: 10, name: "Vijay", age: 26, role: "Sr.Software Developer" },
];

const StudentTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student,index) => (
          <tr key={index}>
            <td>{student.no}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
