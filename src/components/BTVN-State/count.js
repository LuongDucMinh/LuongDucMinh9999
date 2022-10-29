import React from "react";
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        counter :0
      }
      this.clickCounter = this.clickCounter.bind(this)
    }
  
    clickCounter (){
      this.setState({
       ...this.state,
       counter: this.state.counter +1,
      })
    }
     render() {
      return <div> <div>Counter: {this.state.counter} </div>
      <button onClick={this.clickCounter}> Click me</button> 
      </div>
     }
    
  }
  
  export default Counter