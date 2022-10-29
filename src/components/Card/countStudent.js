import { useState } from "react";

function Student2() {
    const [student, setStudent] = useState({name:'Minh' , age: 20 });
    
    const clickNow = () =>{
    
      setStudent({...student, age: student.age + 1})
    console.log(student.age);
    }

return(
    <div>
    <h3> Minh có số tuổi là: {student.age} tuổi . Minh tên là {student.name}</h3>
    <button onClick= {clickNow}> Tăng thêm 1 phát </button>
    </div>
)    
}

export default Student2