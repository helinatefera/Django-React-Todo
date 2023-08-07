import React from 'react'
import ListGroup  from "react-bootstrap/ListGroup"
import {FaCheck,FaCheckDouble} from "react-icons/fa"
export default function TaskList({tasks = []}){
  const renderListGroupItem  =(task)=>{
    return <ListGroup key={task.id} className='d-flex justify-content-between align-items-center'>
      <div>
        <span>
          {task.completed===true?<FaCheckDouble/>:<FaCheck/>}
        </span>
      </div>

    </ListGroup>
  }
  
   return <ListGroup>
    
      {tasks.map(task=>{
        return <ListGroup.Item>
          {task.task}
          </ListGroup.Item>
      })
    }
      
    </ListGroup>
}