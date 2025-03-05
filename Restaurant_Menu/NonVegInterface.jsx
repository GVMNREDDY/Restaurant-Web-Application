import React, { useContext } from 'react';

import { RiCloseFill } from "react-icons/ri";

import "./VegMenu.css";
import { useNavigate } from 'react-router-dom';
import { cartItems } from './Routing_Menu';


const NonVegInterface = ({ children }) => {

    const nav = useNavigate();

    const { statusOfPage, setPageStatus } = useContext(cartItems);


    // useEffect(()=>{setPageStatus("starters");nav("/Non-vegeies/Starters")},[])

    return (
        <>
            <div onClick={() => nav("/")} style={{ position:"fixed",zIndex:"13",right:"1.5rem",cursor:"pointer"}} className='btnCross'><RiCloseFill/></div>

            <div className="divclassVegMenu" >
                <header className="headerfileInVeg">
                    <div className='divselectionNonveg'>Non-Veg {statusOfPage}</div>
                    <div className="listdivheader">
                        <ul className="liststyletype">
                            <li onClick={() => { setPageStatus("starters"); nav("/Non-vegeies/Starters") }} className='headeritem' >Starters</li>
                            <li onClick={() => { setPageStatus("MainCourse"); nav("/Non-vegeies/MainCourse") }} className='headeritem' >MainCourse</li>
                            <li onClick={() => { setPageStatus("Rotis"); nav("/Non-vegeies/Rotis") }} className='headeritem' >Rotis</li>
                        </ul>
                    </div>
                </header>
            </div>
            {children}
        </>
    )
}

export default NonVegInterface;