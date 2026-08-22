import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
let tasks = [];
function TestToDo(props) {
  const [task, setTask] = useState("");
  // const [data, setData] = useState([])

  const handleData = (e) => {
    let obj = {
      id: crypto.randomUUID(),
      task,
    };

    tasks.push(obj);

    // setData([...data, obj])
    setTask("");
// setData('');
    // console.log(data);
  };
  const handleDel = (id) => {
    console.log("hii");


    let index = tasks.findIndex((v) => v.id === id);
    console.log(index);

    tasks.splice(index, 1);

    console.log(tasks);

    setTask("");
  };
  const handleEdit = (id) => {
    let EditTask = tasks.find((v) => v.id === id);
    console.log(EditTask.task);

    setTask(" ");
   
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => setTask(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={(e) => handleData()}>
        +
      </Button>

      {
       
tasks?.map((v) => (
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={v.task} />
                <EditIcon onClick={() => handleEdit(v.id)} />
                <DeleteIcon onClick={() => handleDel(v.id)} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      ))
         
      }
    </div>
  );
}

export default TestToDo;
