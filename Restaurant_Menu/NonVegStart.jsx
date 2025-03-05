import React, { useContext, useState } from "react";

import nonVegStarters from "./NonVeg_Starters";
import { cartItems } from "./Routing_Menu";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useNavigate } from "react-router-dom";


const NonVegStart = () => {

    const nav=useNavigate();


    const { itemCart, setitemCart, NonvegTable,setNonVegtable  } = useContext(cartItems);

    const [buttontog, setbtntog] = useState(true);

    const itemAdded = (obj) => {
        const tableBtnTog = NonvegTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = false;
            }
            return i;
        })
        setNonVegtable(tableBtnTog);


        // setitemCart({...itemCart.NonVegStart,...obj});

        setitemCart(i => ({...i,nonVegStarters:[...i.nonVegStarters,obj]}));
    }
// console.log()

    const itemremoved = (obj) => {

        const tableBtnTog = NonvegTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = true;
            }
            return i;
        })
        setNonVegtable(tableBtnTog);
        // const updatedCart = itemCart.filter(i => i.id !== obj.id);

        // let indexIs = 0;
        // const updatedCart = itemCart.splice(indexIs,1);

        setitemCart((i) => ({...i,nonVegStarters: i.nonVegStarters?.filter((j) => (j.id !== obj.id))}));
    }

    console.log(itemCart);

    return (
        <>
            <div className="divVegStarters">
                {
                    NonvegTable?.map((i) => (
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

export default NonVegStart;