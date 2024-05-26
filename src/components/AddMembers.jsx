import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FiPlus } from "react-icons/fi";
import { BiSolidUserPlus } from "react-icons/bi";
import {api} from './variables.js';
// import { RxCross2 } from "react-icons/rx";

export default function FormDialog(props) {
  const token = localStorage.getItem("auth_token");
    // const [requestData, setrequestData] = React.useState()
  // const [spaces, setSpaces] = React.useState(0);
  
    
    // function dataPasser(num){
    //   return <Spaces spaceCount={num}/>
    // }

    async function addMember(auth_token, member_id){
        // const res = await fetch("https://homework-collab-production.up.railway.app/space/create_space/",{
          const res = await fetch(`${api}/space/add_member/${props.spaceId}/${member_id}/`,{
            method: "POST",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            // body: JSON.stringify(rdata)
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{

          console.log('Response:', data);
          alert(`${member_id} member has been added`)
          props.fetcher(token);
          props.renderer();
        //   props.fetcher(token);
        //   props.renderer();
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
      <Button variant="outlined" onClick={handleClickOpen} className="w-[3rem]">
      {/* <FiPlus className='scale-[2] color-black'/> */}
      <BiSolidUserPlus className='scale-[2] color-black'/>
        {/* Create a Notice */}
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
            const memberId = formJson.member_id;
            // const noticeContent = formJson.notice_content;
        //     const requestData= {"id": `${memberId}`
        //     // , "content": `${noticeContent}`
        // };
            // console.log(requestData);
            addMember(token, memberId);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add members</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`You can add members to your space with their usernames.`}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="member_id"
            name="member_id"
            label="Username:"
            type="text"g
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
          {/* <RxCross2 /> */}
            Cancel
            </Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}