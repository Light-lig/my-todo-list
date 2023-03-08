import React, { useState } from "react";
import { useTasksStore } from '../store';
import './styles.css';

const ItemTask = (props) =>{
    const {item} = props;

    const { deleteTask ,markComplete}  = useTasksStore((state)=>state);
    const [checked, setChecked] = useState((item.status == 'COMPLETED'));
    
    return(
        <li>
            <span className={`${checked?'completed':''}`}>
                {item.title}
            </span>
            <input type="checkbox" onChange={()=>{markComplete(item)}} checked={checked}/>
            {
                !checked?<input type="button" value="-" onClick={()=>deleteTask(item)}/>:<></>
            }
        </li>
    )
}

export default ItemTask;