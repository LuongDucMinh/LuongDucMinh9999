import {useState} from 'react'

function CountNumber () {
    const [count, setCount] = useState(0)
    
    const increase =()=>{
      setCount(count + 1 )
    }
    return(
      <div className='countNumber'>
     <h3>{count}</h3>
      <button onClick={increase}> Tăng thêm 1 phát</button>
      </div>
     
    )
    } 

    export default CountNumber
    