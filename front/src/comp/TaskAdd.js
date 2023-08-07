import React from 'react'
import {useState} from 'react'
// const TaskAdd = (props) => {
//     const [task, setTask] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.addTask(task);
//         setTask('');
//     };  
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <h2>What need to be Done!</h2>
//             <div className="input-container">
//                 <label htmlFor="title">Task</label>
//                 <input 
//                     name="task" 
//                     type="text" 
//                     value={task}
//                     onChange={(e) => setTask(e.target.value)}
//                 />
//             </div>
//             <button type="submit" className="btn-submit">Add Task</button>
//         </form>
        
//     </div>
//   )
// }

// export default TaskAdd

import Button  from 'react-bootstrap/Button'
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"


export default function TaskAdd(){
    const [task,setTask] = useState("");
    const handleChange = e =>{
        setTask(e.target.value);
    }
    return(
       <div>
        <Form>
        <InputGroup className='mb-4'>
            <FormControl placeholder='New Task' value={task}
            onChange={handleChange}/>
            <Button type="submit">
                Add
            </Button>
        </InputGroup>
    </Form>
       </div>
    );

}