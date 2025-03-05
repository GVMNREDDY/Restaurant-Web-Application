import React, { useContext } from 'react';
import { RiCloseFill } from "react-icons/ri";

import "./VegMenu.css";
import { useNavigate } from 'react-router-dom';
import { cartItems } from './Routing_Menu';

const VegInterface = ({ children }) => {

    const nav = useNavigate();

    const { statusOfPage, setPageStatus } = useContext(cartItems);


    // useEffect(()=>{setPageStatus("starters");nav("/Vegeies/Starters")},[])

    return (
        <>
            <div onClick={() => nav("/")} className='btnCross'><RiCloseFill/></div>

            <div className="divclassVegMenu" >
                <header className="headerfileInVeg">
                    <div className='divselectionNonveg'>Veg {statusOfPage}</div>
                    <div className="listdivheader">
                        <ul className="liststyletype">
                            <li onClick={() => { setPageStatus("starters"); nav("/Vegeies/Starters") }} className='headeritem' >Starters</li>
                            <li onClick={() => { setPageStatus("MainCourse"); nav("/Vegeies/MainCourse") }} className='headeritem' >MainCourse</li>
                            <li onClick={() => { setPageStatus("Rotis"); nav("/Vegeies/Rotis") }} className='headeritem' >Rotis</li>
                        </ul>
                    </div>
                </header>
            </div>
            {children}
        </>
    )
}

export default VegInterface;