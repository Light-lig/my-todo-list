import React from 'react';
import { useForm } from "react-hook-form";
import { useTasksStore } from '../store';

const TaskForm = () =>{

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const addNew = useTasksStore((state)=>state.addNew);
    const onSubmit = data => {
        addNew(data)
        reset();    
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} >
        <div>
                <div>
                    <label htmlFor='title'>
                        Title
                    </label><br/>
                    <input type="text" {...register("title", { required: true })} />

                    {errors.title && <span>This field is required</span>}

                </div>
                <div>
                    <label htmlFor='description'>
                        Description
                    </label><br/>
                    <input type="text" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

                </div>
                <div>
                    <label htmlFor='person'>
                        Person in charge
                    </label><br/>
                    <input type="text" {...register("person", { required: true })} />
                    {errors.person && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor='date'>
                        Date
                    </label><br/>
                    <input type="date" {...register("date", { required: true })} />

                    {errors.date && <span>This field is required</span>}
                </div>
            </div>
            <input type="submit" value="Save" />
        </form>
  )
}

export default TaskForm;