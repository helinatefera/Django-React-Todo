import React from 'react'
import ListGroup  from "react-bootstrap/ListGroup"
import {FaCheck,FaCheckDouble} from "react-icons/fa"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
export default function TaskList({tasks = []}){
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
                }} />
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