import "../../styles/landingPage/headerLanding/header.css";
import CarouselHeader from "../carousel/CarouselHeader";

function Header() {
    return(
        <>
            <div className="d-flex justify-content-center">
                <div className='header-text-container d-flex justify-content-center text-center m-5'>
                    <a className="header-text-custom text-decoration-none text-center">Walt Disney World Resort Orlando </a>
                    {/* <p className="header-text-custom separators-custom">|</p> */}
                    <div className="vr"></div>               
                    <a className="header-text-custom text-decoration-none text-center">DisneyLand California </a>
                    <div className="vr"></div>               
                    <a className="header-text-custom text-decoration-none text-center">Universal Studios Orlando </a>
                    <div className="vr"></div>               
                    <a className="header-text-custom text-decoration-none text-center">Universal Studios Hollywood </a>
                    <div className="vr"></div>               
                    <a className="header-text-custom text-decoration-none text-center">Viaja a la playa </a>
                </div>
            </div>
            <CarouselHeader />
        </>
    )
}
export default Header;
