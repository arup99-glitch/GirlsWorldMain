import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Booking = () => {
    const {user} = useAuth();
    const [booking,setBooking] = useState([]);

    useEffect(() =>{
        const url=`https://girls-worls-server-main-production.up.railway.app/booking?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data));

    },[])
    return (
        <div>
            <h2>This is booking: {booking.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appointments  table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Booking Date</TableCell>
            <TableCell align="right">BKASH Number</TableCell>
            <TableCell align="right">Transation ID</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {booking.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.Bkash}</TableCell>
              <TableCell align="right">Accepted
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Booking;