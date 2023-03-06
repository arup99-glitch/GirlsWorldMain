import React from 'react';
import useGirlsWorldCart from '../../hooks/useGirlsWorldCart';
import FirstNevigation from '../Shared/FirstNevigation/FirstNevigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
import { Button, Grid } from '@mui/material';
import Calender from '../Shared/Calender/Calender';

const Cart = ({date,setDate}) => {
    const { cart, decreaseQuantity, increaseQuantity, removeItem, clearCart } = useGirlsWorldCart();
    
    return (
        <div>
            <FirstNevigation />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
            <div className='cartbox'>
            <h5 className='cartdetails1'>Cart Details</h5>
            <h6 className='cartdetails2'>Total Items: - - - - - - - - - - - - - {cart.length} </h6>
            < div className='cartprice' >
                        
                        <h6 className='cartdetails3'>Total Price: - - - - - - - - - - - - - {cart.reduce((data, currentValue) => {
                            return data = data + currentValue.quantity * parseFloat(currentValue?.price.split('$')[0])
                        }, 0)} Tk <hr className='line'></hr></h6>
                    </div>
                    <h6>Grant Total :  {cart.reduce((data, currentValue) => {
                            return data = data + currentValue.quantity * parseFloat(currentValue?.price.split('$')[0])
                        }, 0)} </h6>
                        
                    <Button>Checkout</Button><Button onClick={() => clearCart()}>clear cart</Button>

            </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            </Grid>
            {
                cart.length > 0 && <ul>
                    {
                        cart.map(item => {
                            return <div className='mapcart'>
                                <div className='cart' style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <img src={item?.img} height={80} width={90} alt="" />
                                    
                                    <h6 className='cardetails'>{item?.name}</h6>
                                    <p className='cardetails'>price: {item?.price} /unit</p>
                                    <p className='cardetails'>quantity: {item?.quantity}</p>
                                    <p className='cardetails'>Total price: {typeof (item?.price) === "string" ? parseFloat(item?.price.split('$')[0]) * item?.quantity : parseFloat(item?.price) * item?.quantity} </p>
                                   
                                    <button className='cartbtn' onClick={() => decreaseQuantity(item?.id)}><i class="fa-solid fa-minus"></i></button>
                                    
                                    <button className='cartbtn' onClick={() => increaseQuantity(item?.id)}><i class="fa-sharp fa-solid fa-plus"></i></button>

                                    <button className='cartbtn' onClick={() => removeItem(item?.id)}><i class="fa-solid fa-xmark"></i></button>

                                </div>
                            </div>
                        }
                        )
                    }
                    
                </ul>
            }
        </div >
    );
};

export default Cart;