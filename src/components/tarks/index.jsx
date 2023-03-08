import React from "react";
import ItemTask from "./itemTasks";
const Tasks = (props) =>{
    const {tasks} = props;
    return(
        <ul>
            {
                tasks.map((el)=><ItemTask key={el.id} item={el}/>)
            }
        </ul>
    )
}

export default Tasks;