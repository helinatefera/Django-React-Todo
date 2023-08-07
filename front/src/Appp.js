// // import React from 'react'
// import {useState,useEffect} from 'react'
// // import TaskAdd from './comp/TaskAdd'
// // // import TaskList from './comp/TaskList';
// // const App = () => {
// //   const [tasks, setTask] = useState([]);
  
// //   const fetchTasks = async() => {
// //     const response = await fetch("http://127.0.0.1:8000/tasks");
// //     const data = await response.json();
// //     setTask(data);
// //   }
 
// //  useEffect(() => {
// //       fetchTasks()
// //    }, []);
   
// //   const addTask = async(tasks) => {
// //     const response = await fetch('http://127.0.0.1:8000/tasks', {
// //       method: 'Task',
// //       body: JSON.stringify({
// //           tasks: tasks,
// //           userId: Math.random().toString(36).slice(2),
// //       }),
// //        headers: {
// //           'Content-type': 'application/json; charset=UTF-8',
// //       },
// //     });
// //     const data = await response.json();
// //     setTask((prevTasks) => [data, ...prevTasks])
// //   };
   
// //   const deleteTask = async(id) => {
// //     const response = await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
// //       method: 'DELETE'
// //     })
// //       if(response.status === 200) {
// //         setTask(
// //           tasks.filter((Task) => {
// //             return Task.id !== id;
// //           })
// //         )
// //       }
// //   };
   
// //   return (
// //     <main>
// //     <h1>Consuming REST api with Axios</h1>
// //       <TaskAdd addTask={addTask}/>
// //       <section className="posts-container">
// //       <h2>Tasks</h2>
// //         {tasks.map((Task) => 
// //           <TaskAdd 
// //             key={Task.id} 
// //             id={Task.id}
// //             title={Task.tasks} 
// //             deleteTask={deleteTask}
// //           />
// //         )}
// //       </section>
// //    </main>
// //   )
// // }

// // export default App
// import React from 'react'
// import TaskList from './comp/TaskList';
// import TaskAdd from './comp/TaskAdd';

// const App = () => {
//   const [task, setTask] = useState([]);
  
//   // const client = axios.create({
//   //   baseURL: "http://127.0.0.1:8000/tasks" 
//   // });
//   const fetchTasks = async() => {
//     const response = await fetch("http://127.0.0.1:8000/tasks");
//     const data = await response.json();
//     setTask(data);
//   }
 
//  useEffect(() => {
//       fetchTasks()
//    }, []);
//     const addTask = async(task) => {
//     const response = await fetch('http://127.0.0.1:8000/tasks', {
//       method: 'POST',
//       body: JSON.stringify({
//           task: task,
//           userId: Math.random().toString(36).slice(2),
//       }),
//        headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//       }
//     });
//     const data = await response.json();
//     setTask((prevTasks) => [data, ...prevTasks])
//     console.log(task)
//   };
//   return (
//     <main>
//     {/* <h1>Consuming REST api with Axios</h1> */}
//       <TaskAdd addTask={addTask}/>
//       <section className="posts-container">
//       <h2>Tasks</h2>
//         {task.map((task) => 
//           <TaskList 
//             key={task.id} 
//             // id={task.id}
//             task={task.task}
//           />
//         )}
//         {console.log}
//       </section>
//    </main>
//   )
// }

// export default App