import React from "react";
class Student extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        student :({name:'Minh', age:25})
      }
      this.clickIncrease = this.clickIncrease.bind(this)
    }
  
    clickIncrease (){
      this.setState({
       ...this.state,
       student: {...this.state.student,
        age: this.state.student.age + 1
       }
      })
    }
     render() {
      return <div> <div>Minh tên là {this.state.student.name} , Minh đã {this.state.student.age} tuổi! </div>
      <button onClick={this.clickIncrease}> Update Age</button> 
      </div>
     }
    
  }
  
  export default Student;