import {useState} from 'react'

const ListComponent = () => {

    const [input, setInput] = useState(['']);
    const [item, setItem] = useState ([]);
    
    

    const onClickHandler = ()=>{
      const updateElement = [...item, input] 
       setItem(updateElement)
       setInput('')
    }
   
    const onChangeHandler = (e) =>{
        const value = e.target.value;
        setInput(value)
    }
    

    return (
        <>
        <input placeholder='new task' onChange={onChangeHandler}  value = {input} />
        <p>{item.length}</p>
        <ul>
            {item.map((element, index)=>(
            <li>
                {element} 
            </li>))}
            
        </ul>

        <button onClick={onClickHandler}> Add TO DO</button>
        </>
    )
}

export default ListComponent 