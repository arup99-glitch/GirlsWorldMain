import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, CardMedia, Grid } from '@mui/material';
import './BestSellerModal.css';
import useGirlsWorldCart from '../../../hooks/useGirlsWorldCart';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const BestSellerModal = ({ open, handleClose, cardDetails, props }) => {

  const { cart, addToCart, decreaseQuantity, increaseQuantity } = useGirlsWorldCart();
  const { name, price, img } = cardDetails;
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  height="500"
                  image={img}
                  alt=""
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {name}
                </Typography>
                <Typography className='priceText' id="modal-modal-description" sx={{ mt: 2 }}>
                  {price}
                </Typography>
                <Typography className='modalText'>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
                <h6 className='stockText'>In Stock 840 Items</h6>
                <Button onClick={() => { addToCart(cardDetails) }}
                  variant="contained">Add To Cart</Button>
                <Button href="#text-buttons">Compare</Button>
                <Button onClick={() => { decreaseQuantity(cardDetails.id) }} ><i class="fa-solid fa-minus"></i></Button>
                <Button onClick={() => { increaseQuantity(cardDetails.id) }} ><i class="fa-sharp fa-solid fa-plus"></i></Button>

                <Button href="#text-buttons">Go to Wishlist</Button>
                <hr></hr>
                <h5>SKU: Demo_6</h5>
                <h5>Share on <i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-instagram"></i> <i class="fa-solid fa-message-text"></i> <i class="fa-brands fa-twitter"></i></h5>




              </Grid>

            </Grid>
          </Box>




        </Box>
      </Fade>
    </Modal>

  );
};


export default BestSellerModal;