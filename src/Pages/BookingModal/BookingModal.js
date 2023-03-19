import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Input ,Alert} from '@mui/material';
import { DatePicker } from '@mui/lab';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking,handleBookingClose,setBookingSuccess}) => {
    const {user}=useAuth();
    const initialInfo = {customerName: user.displayName, email: user.email, phone:'', Bkash:'',date:''}
    const [bookingInfo,setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newInfo = {...bookingInfo};
       
       newInfo[field]=value;
       setBookingInfo(newInfo);
       
    }
    const handleBookingSubmit=e=>{
        alert('submitting');
        //collect data
         const booking = {
            ...bookingInfo,
            // date: date.to.localDateString,
         }
        //send to the server
        fetch('https://girls-worls-server-main-production-af95.up.railway.app/booking',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                console.log(data);
                setBookingSuccess(true);
                handleBookingClose();
                
            }
        })

        
        e.preventDafault();
    }
    return (
        <div>
             <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Confirm Booking
            </Typography>
           <form onSubmit={handleBookingSubmit}>
           <TextField
          
          sx={{width:'90%',margin:2}}
          id="outlined-size-small"
          label="time"
          size="small"
        />
         <TextField
          
          sx={{width:'90%',margin:2}}
          id="outlined-size-small"
          name="customerName"
         onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
         <TextField
          
          sx={{width:'90%',margin:2}}
          id="outlined-size-small"
          
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
         <TextField
          
          sx={{width:'90%',margin:2}}
          id="outlined-size-small"
          label="Your Nmber" 
                 type="Number"
                 name="phone"
          onBlur={handleOnBlur}
          defaultValue="Phone Number"
          size="small"
        />
         <TextField
          
          sx={{width:'90%',margin:2}}
          id="outlined-size-small"
          label="Transation ID"
          name="Bkash"
          onBlur={handleOnBlur}
          
          size="small"
        />
         <TextField
          
          sx={{width:'90%',margin:2}}
          name="date"
          id="outlined-size-small"
          onBlur={handleOnBlur}
          label="mm/dd/yy"
          size="small"
        />
       
      
        <Button type="submit" variant="contained">Submit</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default BookingModal;
