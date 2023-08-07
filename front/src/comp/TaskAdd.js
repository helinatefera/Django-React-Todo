import React from 'react'
import {useState} from 'react'
import axios from 'axios'

import Button  from 'react-bootstrap/Button'
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"


export default function TaskAdd({ tasks, setTasks }) {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) {
            alert("Please provide a valid value for todo");
            return;
        }

        axios.post("/api/tasks/", {
            task: name
        }).then((res) => {
            setName("");
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
                value={name}
            />
            <Button type="submit">
                Add
            </Button>
        </InputGroup>
    </Form>
}