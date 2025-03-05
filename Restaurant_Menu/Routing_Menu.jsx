import React, { createContext, useState } from 'react';
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import MainMenu from './MainSelection';
import VegInterface from './VegInterface';
import NonVegInterface from './NonVegInterface';
import VegStart from './VegStart';
import VegMainCourse from './VegMainCourse';
import Rotis from './Rotis';
import NonVegStart from './NonVegStart';
import NonVegMainCourse from './NonVeg_MainCourse';
import CartSection from './CartSection';
import vegStarters from './VegStarters';
import vegMainCourse from './VegesMainCourse';
import nonVegStarters from './NonVeg_Starters';
import nonVegMainCourse from './NonVeges_MainCourse';
import rotis from './Rotis_Course';


export const cartItems = createContext();

const RoutingMenu = () => {

    const [itemCart, setitemCart] = useState({
        vegStarters:[],
        vegMainCourse:[],
        rotis:[],
        nonVegStarters:[],
        nonVegMainCourse:[],
    });

    const [statusOfPage,setPageStatus]=useState("");

    const [vegTable, setVegtable] = useState(vegStarters);
    const [vegMainTable, setMainVegtable] = useState(vegMainCourse);
    const [NonvegTable, setNonVegtable] = useState(nonVegStarters);
    const [NonvegMainTable, setNonMainVegtable] = useState(nonVegMainCourse);
    const [rotiTable, setRotitable] = useState(rotis);

    // const nav= useNavigate();

    return (
        <>
            <cartItems.Provider value={{ itemCart, setitemCart,statusOfPage,setPageStatus, vegTable, setVegtable, vegMainTable, setMainVegtable, NonvegTable, setNonVegtable, NonvegMainTable, setNonMainVegtable, rotiTable, setRotitable }}>
                <HashRouter>
                    <Routes>
                        <Route index element={<MainMenu />}></Route>
                        <Route path="/Vegeies" element={<VegInterface><Outlet /></VegInterface>}>
                            <Route path="/Vegeies/Starters" element={<VegStart />} />
                            <Route path="/Vegeies/MainCourse" element={<VegMainCourse />} />
                            <Route path="/Vegeies/Rotis" element={<Rotis />} />
                        </Route>
                        <Route path="/Non-vegeies" element={<NonVegInterface><Outlet /></NonVegInterface>}>
                            <Route path="/Non-vegeies/Starters" element={<NonVegStart />} />
                            <Route path="/Non-vegeies/MainCourse" element={<NonVegMainCourse />} />
                            <Route path="/Non-vegeies/Rotis" element={<Rotis />} />
                        </Route>
                        <Route path='/CartSection' element={<CartSection />}></Route>
                    </Routes>
                </HashRouter>
            </cartItems.Provider>
        </>
    )
}

export default RoutingMenu;