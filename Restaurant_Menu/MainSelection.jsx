import React from 'react';
import './MainMenuSection.css';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {

    const nav = useNavigate();


    return (
        <>
            {/* <div>Printing new data</div> */}
            <div className="divMainMenuSection">

                <div className="imageDiv"></div>
                <div className="divMainMenu1">
                    <div className="restaurantName">GVMNR RESTAURANT</div>
                </div>
                <div className='divMainMenu2'>
                    <div className='VegCourse1' onClick={() => { nav("/Vegeies/Starters") }}><div className='innermainclass'>
                        <img src="./Background images/pannerbuttermasalapik.png" alt='not possible' className='Blurimage' />
                        <div className='vegNameDisplay'>Vegies </div></div></div>
                    <div className='NonVegCourse2' onClick={() => { nav("/Non-vegeies/Starters") }}><div className='innermainclass'><div className='NonVegNameDisplay'>Non-Vegies</div>
                        <img src="./Background images/backgroundnonvegfreepik.png" alt='not possible' width="360vw" height="345vh" className='Blurimage' /></div></div>
                </div>
            </div>
        </>
    )
}

export default MainMenu;