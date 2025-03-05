import React, { useContext } from 'react';
import { RiCloseFill } from "react-icons/ri";

import { cartItems } from './Routing_Menu';
import { useNavigate } from 'react-router-dom';

import "./cartStyles.css";


const CartSection = () => {

    const nav = useNavigate();

    const { itemCart, setitemCart, vegTable, vegMainTable, NonvegTable, NonvegMainTable, rotiTable, setVegtable, setMainVegtable, setNonVegtable, setNonMainVegtable, setRotitable } = useContext(cartItems);

    const orderPlaced = () => {
        setitemCart({
            vegStarters: [],
            vegMainCourse: [],
            rotis: [],
            nonVegStarters: [],
            nonVegMainCourse: [],
        });

        const vegtab = vegTable?.map((i) => {
            if (!i.button) {
                i.button = true;
            }
            else {
                i.button = true;
            }
            return i;
        })

        const vegmaintab = vegMainTable?.map((i) => {
            if (!i.button) {
                i.button = true;
            }
            else {
                i.button = true;
            }
            return i;
        })
        const nonvegtab = NonvegTable?.map((i) => {
            if (!i.button) {
                i.button = true;
            }
            else {
                i.button = true;
            }
            return i;
        })
        const nonvegmaintab = NonvegMainTable?.map((i) => {
            if (!i.button) {
                i.button = true;
            }
            else {
                i.button = true;
            }
            return i;
        })
        const roti = rotiTable?.map((i) => {
            if (!i.button) {
                i.button = true;
            }
            else {
                i.button = true;
            }
            return i;
        })
        setVegtable(vegtab);
        setMainVegtable(vegmaintab);
        setNonVegtable(nonvegtab);
        setNonMainVegtable(nonvegmaintab);
        setRotitable(roti);
    }

    const incrementing = (obj, category) => {
        setitemCart((prevCart) => ({
            ...prevCart,
            [category]: prevCart[category].map((item) =>
                item.id === obj.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        }));
    };

    const decreasing = (obj, category) => {
        setitemCart((prevCart) => ({
            ...prevCart,
            [category]: prevCart[category].map((item) =>
                item.id === obj.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ),
        }));
    };


    return (
        <>
            <div className='cartsectionmain'>
                <div className='cartsectionmaindiv'>
                    <div onClick={() => nav("/")} style={{ position: "fixed", zIndex: "3", right: "1.5rem", cursor: "pointer", fontSize: "2rem" }} className='crossBar'><RiCloseFill /></div>
                    <div className='cartMainDiv'>
                        {/* <div style={{ color: "red" }} className='cartHeaderDiv' onClick={() => nav("/Vegeies/Starters")}>VEG STARTERS</div> */}
                        {/* <div style={{ color: "red" }} className='cartHeaderDiv' onClick={() => nav("/Vegeies/MainCourse")}>VEG MAINCOURSE</div> */}
                        {/* <div style={{ color: "red" }} className='cartHeaderDiv' onClick={() => nav("/Non-vegeies/Starters")}>NON-VEG STARTERS</div> */}
                        {/* <div style={{ color: "red" }} className='cartHeaderDiv' onClick={() => nav("/Non-vegeies/MainCourse")}>NON-VEG MAINCOURSE</div> */}
                        {/* <div style={{ color: "red" }} className='cartHeaderDiv' onClick={() => nav("/Vegeies/Rotis")}>ROTIS</div> */}
                    </div>
                    <div className='cartItemsDisplay'>
                        <div className='cartPair'>
                            <div className='cartHeaderDiv' onClick={() => nav("/Vegeies/Starters")}>Veg Starters</div>
                            <div className='cartItemsDiv'>
                                <div className='InnerContentCartDiv'>{
                                    itemCart.vegStarters?.map((i) => (
                                        <div className='contentDiv'>
                                            <div>{i.name}</div>
                                            <div>
                                                <button onClick={() => decreasing(i, "vegStarters")}>-</button>
                                                {i.quantity}
                                                <button onClick={() => incrementing(i, "vegStarters")}>+</button>
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>
                        <div className='cartPair'>
                            <div className='cartHeaderDiv' onClick={() => nav("/Vegeies/MainCourse")}>Veg Main Course</div>
                            <div className='cartItemsDiv'>
                                <div className='InnerContentCartDiv'>{
                                    itemCart.vegMainCourse?.map((i) => (
                                        <div className='contentDiv'>
                                            <div>{i.name}</div>
                                            <div>
                                                <button onClick={() => decreasing(i, "vegMainCourse")}>-</button>
                                                {i.quantity}
                                                <button onClick={() => incrementing(i, "vegMainCourse")}>+</button>
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>

                        <div className='cartPair'>
                            <div className='cartHeaderDiv' onClick={() => nav("/Non-vegeies/Starters")}>Non-Veg Starters</div>
                            <div className='cartItemsDiv'>
                                <div className='InnerContentCartDiv'>{
                                    itemCart.nonVegStarters?.map((i) => (
                                        <div className='contentDiv'>
                                            <div>{i.name}</div>
                                            <div>
                                                <button onClick={() => decreasing(i, "nonVegStarters")}>-</button>
                                                {i.quantity}
                                                <button onClick={() => incrementing(i, "nonVegStarters")}>+</button>
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>

                        <div className='cartPair'>
                            <div className='cartHeaderDiv' onClick={() => nav("/Non-vegeies/MainCourse")}>Non-Veg Main Course</div>
                            <div className='cartItemsDiv'>
                                <div className='InnerContentCartDiv'>{
                                    itemCart.nonVegMainCourse?.map((i) => (
                                        <div className='contentDiv'>
                                            <div>{i.name}</div>
                                            <div>
                                                <button onClick={() => decreasing(i, "nonVegMainCourse")}>-</button>
                                                {i.quantity}
                                                <button onClick={() => incrementing(i, "nonVegMainCourse")}>+</button>
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>


                        <div className='cartPair'>
                            <div className='cartHeaderDiv' onClick={() => nav("/Vegeies/Rotis")}>Rotis</div>
                            <div className='cartItemsDiv'>
                                <div className='InnerContentCartDiv'>{
                                    itemCart.rotis?.map((i) => (
                                        <div className='contentDiv'>
                                            <div>{i.name}</div>
                                            <div>
                                                <button onClick={() => decreasing(i, "rotis")}>-</button>
                                                {i.quantity}
                                                <button onClick={() => incrementing(i, "rotis")}>+</button>
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>
                    </div>
                    <div className='placeorderdiv'><button onClick={() => { orderPlaced(); alert("Order has been placed"); nav("/") }} className='btnPlaceOrder'>Place Order</button></div>
                </div>
            </div>
        </>
    )
}

export default CartSection;