import React, { useContext, useState } from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import "./VegMenu.css";
import { cartItems } from './Routing_Menu';
import { useNavigate } from 'react-router-dom';

const Rotis = () => {

    const nav=useNavigate();


    const { itemCart, setitemCart, rotiTable, setRotitable } = useContext(cartItems);

    const [buttontog, setbtntog] = useState(true);

    const itemAdded = (obj) => {
        const tableBtnTog = rotiTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = false;
            }
            return i;
        })
        setRotitable(tableBtnTog);
        setitemCart((i) => ({...i,rotis:[...i.rotis,obj]}));
    }

    const itemremoved = (obj) => {
        const tableBtnTog = rotiTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = true;
            }
            return i;
        })
        setRotitable(tableBtnTog);
        // const updatedCart = itemCart.filter(i => i.id !== obj.id);

        // let indexIs = 0;
        // const updatedCart = itemCart.splice(indexIs,1);

        setitemCart((i) => ({...i,rotis: i.rotis.filter((j) => (j.id !== obj.id))}));
    }



    // console.log("working in Vegstart")

    return (
        <>
            <div className="divVegStarters">
                {
                    rotiTable?.map((i) => (
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
            <div className='CartIcon' onClick={() => { console.log(itemCart);nav("/CartSection") }} ><ShoppingCartTwoToneIcon /></div>

        </>
    )
}

export default Rotis;