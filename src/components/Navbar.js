import React, { useEffect, useState } from 'react'
import sidelogo1 from "../img/icon/sidelogo1.png"
import sidelogo2 from "../img/icon/design-for-logo-11549988276bxsuzsd1y1.png"
import sidelogo3 from "../img/icon/sidelogo3.png"
import sidelogo4 from "../img/icon/sidelogo4.jpg"
import sidelogo5 from "../img/icon/sidelogo5.png"
import sidelogo6 from "../img/icon/sidelogo6.png"
import logo from "../img/icon/Sociality-logo.png"


function Navbar() {

    const [navbarStatus, setNavbarStatus] = useState(true);
    const [plusStatus, setPlusStatus] = useState(true);

    useEffect(() => {

        let navbar = document.querySelector(".nav-container");
        let navMenu = document.querySelector(".dropdown-content");
        let plus = document.querySelector(".plus");
        let socialityLogo = document.querySelector(".socialityLogo");
        let mainContainer = document.querySelector(".main-container")

        plusStatus ? plus.innerHTML = "+" : plus.innerHTML = "-"

        if (navbarStatus) {
            mainContainer.style.marginLeft = "70px"
            navbar.style.width = "70px"
            navMenu.style.display = "none"
            socialityLogo.style.display = "none"
        } else {
            mainContainer.style.marginLeft = "220px"
            navbar.style.width = "220px"
            navMenu.style.display = "block"
            socialityLogo.style.display = "block"
        }

    }, [navbarStatus]);

    function handleClick() {
        setNavbarStatus(!navbarStatus)
    }


    return (
        <div>

            <img className="socialityLogo  w-100 py-2 px-4 "
                src={logo} style={{ backgroundColor: "white" }}
            />

            <div className='d-flex'>

                <ul className='sideLogo nav vh-50 d-flex flex-column justify-content-between'
                >

                    <li className='nav-item'>
                        <a href='#'><img src={sidelogo2} /></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'><img src={sidelogo3} /></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'><img src={sidelogo4} /></a>
                    </li>

                    <li className='nav-item li-dropdown' onClick={handleClick}>

                        <label htmlFor="c">
                            <img className="link-dropdown" src={sidelogo1} />
                        </label>
                        <ul className='dropdown-content'>

                            <li>
                                <span className='listSpan'>
                                    <i className="fa-regular fa-bell"></i>
                                    <a>NOTIFICATIONS</a>
                                </span>
                            </li>

                            <li>
                                <span className='listSpan'>
                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                    <a>SUMMARY</a>
                                </span>
                            </li>

                            <li>
                                <span className='listSpan'>

                                    <label htmlFor="touch" className='d-flex justify-content-between align-item-center w-100 '>

                                        <div className=' mt-1'>
                                            <i className="fa-regular fa-pen-to-square me-2 icone"></i>
                                            <a>PUBLISH</a>
                                        </div>
                                        <span className='plus fs-5'></span>

                                    </label>

                                </span>

                                <input type="checkbox" id="touch" onChange={() => setPlusStatus(!plusStatus)} />

                                <ul className="slide">
                                    <a href="#"> <li>Compose</li></a>
                                    <a href="#"><li>Feed</li></a>
                                </ul>
                            </li>

                            <li>
                                <span className='listSpan'>
                                    <i className="fa-regular fa-comments"></i>
                                    <a>ENGAGE</a>
                                </span>
                            </li>

                            <li>
                                <span className='listSpan'>
                                    <i className="fa-solid fa-wave-square"></i>
                                    <a>LISTEN</a>
                                </span>
                            </li>

                            <li>
                                <span className='listSpan'>
                                    <i className="fa-solid fa-chart-line"></i>
                                    <a>REPORT</a>
                                </span>
                            </li>

                        </ul>

                    </li>

                    
                    <li className='nav-item'><a href='#'>
                        <img src={sidelogo5} />
                    </a></li>
                    <li className='nav-item'><a href='#'>
                        <img src={sidelogo6} />
                    </a></li>

                </ul>

            </div>

        </div>
    )
}

export default Navbar