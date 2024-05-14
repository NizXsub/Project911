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
  // const [requestData, setrequestData] = React.useState()
// const [spaces, setSpaces] = React.useState(0);

  
  // function dataPasser(num){
  //   return <Spaces spaceCount={num}/>
  // }

  async function createPortal(auth_token, rdata){
      // const res = await fetch("https://homework-collab-production.up.railway.app/space/create_space/",{
        const res = await fetch(`${api}/space/portal/${props.spaceId}/create_portal/`,{
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
        alert(`${data.message}`)
        props.fetcher(token);
        props.renderer();
        // setSpaces(spaces+1);
        // Console.log(spaces);
        // dataPasser(spaces);
        // Props.spaces += 1;
      }
      

      
      // setUser(data)
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
        Create a Portal
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
            const portalTitle = formJson.portal;
            const portalDes = formJson.portalDes
            // const noticeContent = formJson.notice_content;
            const requestData= {"name": `${portalTitle}`, "description": `${portalDes}`};
            // console.log(requestData);
            createPortal(token, requestData);
            // handleClose();
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Submission Portal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can create a portal to gather assesments files your Students or fellows. Fill up the following information to do so.
            By default, portals are created for three days, starting from the moment you create one.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="portal"
            name="portal"
            label="Portal Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="portalDes"
            name="portalDes"
            label="Portal Description"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="notice_content"
            name="notice_content"
            label="Notice Content:"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="sdate"
            name="sdate"
            label="From:"
            type="date"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="edate"
            name="edate"
            label="To:"
            type="date"
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