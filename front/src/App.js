// import React from 'react'
import axios from "axios";
// import { useState,useEffect } from 'react';

// const App = () => {
//     const [task, setTask] = useState([]);
//     const client = axios.create({
//       baseURL: "http://127.0.0.1:8000/tasks" 
//     });
//     useEffect(() => {
//        client.get('?_limit=10').then((response) => {
//           setTask(response.data);
//        });
//     }, [task]);
 
//     return (
//         <div className="app">
//         <h2>All Tasks 📫</h2>
//         {task.map((task) => {
//            return (
//               <div className="post-card" key={task.id}>
//                  <h2 className="post-title">{task.task}</h2>
                 
//               </div>
//            );
//         })}
//       </div>
//     );
//  };
 
//  export default App;
import React from "react"
import { useEffect,useState } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import TaskList from "./comp/TaskList";
import TaskAdd from "./comp/TaskAdd";

function App(){
   const [task,setTask]=useState([]);

   useEffect(()=>{
      axios.get("/api/tasks/")
      .then((res)=>{
         setTask(res.data)
      }).catch(()=>{
         alert("wrong")
      })
   },[])
   return(
      <div>
         <Navbar bg= "lights">
            <Container>
               <Navbar.Brand>
                  Task Management
               </Navbar.Brand>
            </Container>
         </Navbar>
         <Container>
            <TaskAdd tasks={task} setTasks={setTask}/>
            <TaskList tasks={task} setTask={setTask}/>
         </Container>
      </div>
   );
}

export default App;