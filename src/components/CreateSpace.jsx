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
// import {spaceDataContainer} from "./Spaces.jsx";
// import { createContainer } from "unstated-next";
// import { RxCross2 } from "react-icons/rx";
// import Spaces from './Spaces.jsx';
// import { Console } from 'console';

// const spaceNumber = () =>{
//   const [track, setTrack] = React.useState(0);
//   const trackAdder = () => {
//     setTrack(track+1);
//   }
//   return {track, trackAdder}

// }
// export const spaceNumberContainer = createContainer(spaceNumber);

export default function FormDialog({func}) {
  // const spaceContainer = spaceDataContainer.useContainer();

  const token = localStorage.getItem("auth_token");
    // const [requestData, setrequestData] = React.useState()
  // const [spaces, setSpaces] = React.useState(0);
  
    
    // function dataPasser(num){
    //   return <Spaces spaceCount={num}/>
    // }



    async function createSpace(auth_token, rdata){
        // const res = await fetch("https://homework-collab-production.up.railway.app/space/create_space/",{
          const res = await fetch(`${api}/space/create_space/`,{
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
          // spaceContainer.spaceFetcher();


        }else{

          console.log('Response:', data);
          func(token);
          
        }
        

        
        // setUser(data)
    }

    // useEffect(()=>{
    //     getUser(token);
    // },[])



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
        Create a Space
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
            const spaceName = formJson.spaceName;
            const requestData= {"spaceId": null, "name": `${spaceName}`, "teacher": null, "created_at": null};
            console.log(requestData);
            createSpace(token, requestData);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Space</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can Create your Own Space and Manage your Students. Fill up the following information to do so.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="spaceName"
            label="Space Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
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