import React, { useContext, useState } from 'react';

import "./VegMenu.css";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import { cartItems } from './Routing_Menu';
import { useNavigate } from 'react-router-dom';

const VegStart = () => {

    const nav = useNavigate();




    const { itemCart, setitemCart, vegTable, setVegtable } = useContext(cartItems);

    const [buttontog, setbtntog] = useState(true);

    const itemAdded = (obj) => {
        const tableBtnTog = vegTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = false;
            }
            return i;
        })
        setVegtable(tableBtnTog);
        setitemCart(i => ({ ...i, vegStarters: [...i.vegStarters, obj] }));

    }

    const itemremoved = (obj) => {
        const tableBtnTog = vegTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = true;
            }
            return i;
        })
        setVegtable(tableBtnTog);
        // const updatedCart = itemCart.filter(i => i.id !== obj.id);

        // let indexIs = 0;
        // const updatedCart = itemCart.splice(indexIs,1);

        setitemCart((i) => ({ ...i, vegStarters: i.vegStarters?.filter((j) => (j.id !== obj.id)) }));
    }


    // console.log("working in Vegstart")

    return (
        <>
            <div className="divVegStarters">
                {
                    vegTable?.map((i) => (
                        <div className="divVegItems">
                            <img src={i.image} alt='no content sorry!' class="imageclass" />
                            <div className="itemdiv">
                                <div className='innerdivclassitemprice'>
                                    <p className='nameofitem'>{i.name}</p>
                                    <span>₹ : {i.price}</span>
                                </div>
                                <p className='description'>About : {i.description}</p>
                                <div className='classbtndiv'>{i.button ? <button onClick={() => itemAdded(i)} className="btnaddremove">Add</button> : <button onClick={() => itemremoved(i)} className="btnaddremove" >remove</button>}</div>
                            </div>
                        </div>
                    )
                    )}
            </div>
            <div className='CartIcon' onClick={() => { console.log(itemCart); nav("/CartSection") }} ><ShoppingCartTwoToneIcon /></div>

        </>
    )
}

export default VegStart;