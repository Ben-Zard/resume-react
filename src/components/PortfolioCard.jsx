import {useState} from 'react'


const PortfolioCard = () => {
  const [count,setcount] = useState([]); 
   setcount(() => count + 1);

 return (
    <div>

        <button onClick = {setcount()+1}> {count}</button>
    </div>
  )
}

export default PortfolioCard