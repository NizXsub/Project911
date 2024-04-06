import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FiPlus } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";

export default function FormDialog() {
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
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Submission Portal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can create a portal to gather assesments files your Students or fellows. Fill up the following information to do so.
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
            id="sdate"
            name="sdate"
            label="Start Notice"
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