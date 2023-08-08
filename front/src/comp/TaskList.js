import React, { useState } from 'react'
import ListGroup  from "react-bootstrap/ListGroup"
import {FaCheck,FaCheckDouble} from "react-icons/fa"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import Modal from "react-bootstrap/Modal"
import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/esm/Button'
import axios from "axios"
export default function TaskList({tasks = [],setTask}){


    const [show,setShow]=useState(false)
    const [record,setRecord] = useState(null)


    const closeEdit=()=>{
        setShow(false);
    }


     
    const updateTask = async(id,value)=>{
        return axios.patch(`api/tasks/${id}/`,value)
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
            onClick={()=>{
                updateTask(task.id,{
                    completed:!task.completed
                })
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
                    setRecord(task);
                    setShow(true)
                }}/>
                <AiFillDelete style={{
                    cursor: "pointer"
                }} onClick={()=>{
                    deleteTask(task.id);
                }}/>
            </div>
    </ListGroup.Item>
    }


    const onchange = (e)=>{
        setRecord({
            ...record,
            name:e.target.value
        })

    }  


    const saveChange=async()=>{
        await updateTask(record.id,{task:record.name});
        closeEdit()
    }

    const deleteTask=(id)=>{
        axios.delete(`/api/tasks//${id}`).then(()=>{
            const updatask =tasks.filter(task=>{
                return task.id !== id
                
            })
            window.location.reload(false);
            setTask(updatask)
        }).catch(()=>{
            alert("wrong")
        })
    }

    // const completed = tasks.filter(task=>task.completed===true);
    // const incompleted = tasks.filter(task=>task.completed===false);

   return <div>
    <ListGroup>
          {tasks.map(allTasks)}
     </ListGroup>
     <Modal show={show} onHide={closeEdit}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl   value={record?record.name:""}
            onChange={onchange}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={closeEdit} variant='secondary'> 
                close
            </Button>
            <Button onClick={saveChange} variant='primary'> 
                save
            </Button>
        </Modal.Footer>
     </Modal>
   </div>
}