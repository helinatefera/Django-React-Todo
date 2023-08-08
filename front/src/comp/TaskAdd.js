import React from 'react'
import {useState} from 'react'
import axios from 'axios'

import Button  from 'react-bootstrap/Button'
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"


export default function TaskAdd({ tasks, setTasks }) {
    const [task, setTask ]= useState("");

    const handleChange = e => {
        setTask(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!task) {
            alert("Please provide a valid value for todo");
            return;
        }

         axios.post("/api/tasks/", {
            task: task
        }).then((res) => {
            setTask("");
            const { data } = res;
            setTasks([
                ...tasks,
                data
            ]).catch(() => {
                alert("Something went wrong");
            })
        })
    }

    return <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-4">
            <FormControl placeholder="New Todo"
                onChange={handleChange}
                value={task}
            />
            <Button type="submit">
                Add
            </Button>
        </InputGroup>
    </Form>
}