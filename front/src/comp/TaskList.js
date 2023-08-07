import React from 'react'
import ListGroup  from "react-bootstrap/ListGroup"
import {FaCheck,FaCheckDouble} from "react-icons/fa"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import axios from "axios"
export default function TaskList({tasks = [],setTask}){
    const updateTask = async(id,value)=>{
        return axios.patch(`api/tasks/${id}`,value)
        .then((res)=>{
            const {data}=res;
            const updateTask=tasks.map(task=>{
                if (task.id===id){
                    return data;
                }
                return task;
            })
            setTask(updateTask);
        }).catch(()=>{
            alert("wrong")
        })
    }
    const allTasks = (task) => {
    return <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center">
            <span style={{
                marginRight: "12px", cursor: "pointer"
            }} 
            >
                {task.completed === true ? <FaCheckDouble /> : <FaCheck />}
            </span>
            <span>
                {task.task}
            </span>
        </div>
        <div>
                <AiFillEdit style={{
                    cursor: "pointer",
                    marginRight: "12px"
                }} onClick={()=>{
                    updateTask(task.id,{
                        completed:!task.completed
                    })
                }}/>
                <AiFillDelete style={{
                    cursor: "pointer"
                }} />
            </div>
    </ListGroup.Item>
    }

  
   return <ListGroup>
    <ListGroup.Item>
          {tasks.map(allTasks)}
          </ListGroup.Item>
     </ListGroup>
}