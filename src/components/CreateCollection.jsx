import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FiPlus } from "react-icons/fi";
import {api} from './variables.js';
// import { RxCross2 } from "react-icons/rx";

export default function FormDialog(props) {
  const token = localStorage.getItem("auth_token");

    async function createMCQ(auth_token, rdata){
        // const res = await fetch("https://homework-collab-production.up.railway.app/space/create_space/",{
          const res = await fetch(`${api}/space/${props.spaceId}/mcq/create_collection/`,{
            method: "POST",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            body: JSON.stringify(rdata)
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{

          console.log('Response:', data);
          alert(`${data.name} mcq paper has been created`);
          props.fetcher(token);
          props.renderer();
        //   props.fetcher(token);
        //   props.renderer();
          // setSpaces(spaces+1);
          // Console.log(spaces);
          // dataPasser(spaces);
          // Props.spaces += 1;
        }
        
    }




  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} className="w-[13rem]">
      <FiPlus className='scale-[2] mr-3'/>
        Create MCQ
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const mcqTitle = formJson.mcq_title;
            const mcqContent = formJson.mcq_content;
            const totalMarks = formJson.full_marks;
            const passMarks = formJson.pass_marks;
            const time = formJson.time;
            const requestData= {"name": `${mcqTitle}`, "description": `${mcqContent}`, "marks": totalMarks, "pass_marks": passMarks, "time_in_minutes": time};
            console.log(requestData);
            createMCQ(token, requestData);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create an MCQ Paper</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`You can MCQ paper for your students, with specified marks, and time. You can add questions later once you create a paper.`}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="mcq_title"
            name="mcq_title"
            label="Title:"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="mcq_content"
            name="mcq_content"
            label="Description:"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="full_marks"
            name="full_marks"
            label="Full Marks:"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="pass_marks"
            name="pass_marks"
            label="Pass Marks:"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="time"
            name="time"
            label="Total Time in Minutes:"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
          {/* <RxCross2 /> */}
            Cancel
            </Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}