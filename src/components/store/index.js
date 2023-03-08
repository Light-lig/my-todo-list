import { create } from "zustand";

export const useTasksStore = create((set)=>({
    newTasks:[],
    completedTasks:[],
    addNew:(value)=>{
        set((state)=>{
            let lista = state.newTasks;
            let max = lista.length > 0? Math.max(...lista.map(el=>el.id)):1;
            value.id = max + 1;
            value.status = 'new';
            return  ({newTasks:[...state.newTasks,value]})
        })
    },
    deleteTask:(value)=>{
        set((state)=>{
            let tasks = state.newTasks.filter(el=>el.id != value.id);
            return({newTasks:tasks})
        })
    },
    markComplete:(value)=>{
        set((state)=>{
            state.deleteTask(value);
            value.status = 'COMPLETED';
            return({completedTasks:[...state.completedTasks,value]});
        })
    }
}))