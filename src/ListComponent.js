import { useState} from 'react'

const ListComponent = () => {
    const initialList=[{id: 1, name:'first'},
    {id: 2, name:'second'},
    {id: 3, name:'third'},
    {id: 4, name:'fourth'}]
    const [input, setInput] = useState(['']);
    const [item, setItem] = useState (initialList);
    
    const deleteItem = (id) => {
        const updateElement = item.filter((it) => it.id !== id);
        setItem(updateElement);
      };

    const onClickHandler = ()=>{
        
      const updateElement = [...item, {id:item.length+1, name:input}] 
       setItem(updateElement)
       setInput('')
    }
   
    const onChangeHandler = (e) =>{
        const value = e.target.value;
        setInput(value)
    }

    const onEnterDown = (e) =>{
    
        
        if (e.key === 'Enter'){
            
            const updateElement = [...item, {id:item.length+1,  name:input}] 
            setItem(updateElement)
            setInput('')
        }
    }
   
    
    console.log(item)
    return (
        <>
        <input onKeyDown={onEnterDown} placeholder='new task' onChange={onChangeHandler}  value = {input} />
        <p>{item.length}</p>
        <ul >
            {item.map((it)=>(
            <li   key = {it.id} >
            {it.name}  
            <button onClick={()=>deleteItem(it.id)}>Delete Todo</button>
             
            </li>))}
            
            
        </ul>

       



        <button onClick={onClickHandler}> Add TO DO</button>

        </>
    )
    
}

export default ListComponent 