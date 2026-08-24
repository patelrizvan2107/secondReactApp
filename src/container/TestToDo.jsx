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
function TestToDo(props) {
  const [task, setTask] = useState("");
  const [data, setData] = useState([])
  const [up, setUp] = useState(null);
  const handleData = (e) => {
    let obj = {
      id: crypto.randomUUID(),
      task,
    };

    if (up !== null) {
      let index = data.findIndex((v) => v.id === up);

      let edited = [...data];

      edited[index] = obj;

      setData(edited);

       setUp(null);
    } else {
      setData([...data, obj]);
    }
    
    setTask("");
  };
  const handleDel = (id) => {
    console.log("hii");


    let index = data.findIndex((v) => v.id === id);
    console.log(index);

    let newData = [...data];  
    newData.splice(index, 1);

    console.log(newData);

    setData(newData);
    setTask("")
  };
  const handleEdit = (id) => {
    let EditTask = data.find((v) => v.id === id);
    console.log(EditTask.task);


    setTask(EditTask.task);

    setUp(id);
   
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
          label="Enter Task"
          value={task}
          variant="standard"
          onChange={(e) => setTask(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={(e) => handleData()}>
        +
      </Button>

      {
       
data?.map((v) => (
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
