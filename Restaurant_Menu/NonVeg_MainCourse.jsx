import React, { useContext, useState } from 'react';
import nonVegMainCourse from './NonVeges_MainCourse';
import { cartItems } from './Routing_Menu';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useNavigate } from 'react-router-dom';


const NonVegMainCourse = () => {

    const nav=useNavigate();


    const { itemCart, setitemCart, NonvegMainTable, setNonMainVegtable } = useContext(cartItems);

    const [buttontog, setbtntog] = useState(true);

    const itemAdded = (obj) => {
        const tableBtnTog = NonvegMainTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = false;
            }
            return i;
        })
        setNonMainVegtable(tableBtnTog);
        setitemCart((i) => ({...i,nonVegMainCourse:[...i.nonVegMainCourse,obj]}));
    }

    const itemremoved = (obj) => {
        const tableBtnTog = NonvegMainTable?.map((i) => {
            if (i.id === obj.id) {
                obj.button = true;
            }
            return i;
        })
        setNonMainVegtable(tableBtnTog);

        // setitemCart((prev) => ({...prev, nonVegMainCourse: prev.nonVegMainCourse.filter((item) => item.id !== obj.id),
        // }));

        setitemCart((i) => ({...i,nonVegMainCourse : i.nonVegMainCourse?.filter((j) => j.id  !== obj.id)}));
    }

    console.log("working in ",itemCart);

    return (
        <>
            <div className="divVegStarters">
                {
                    NonvegMainTable?.map((i) => (
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

export default NonVegMainCourse;