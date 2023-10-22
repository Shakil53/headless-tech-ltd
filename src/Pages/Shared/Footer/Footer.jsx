import './Footer.css';
import logo from '../../../assets/images/headless-logo.png'
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaMailBulk, FaFacebookF, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='footer-wraper'>
            <div className='footer'>
                <img src={logo}></img>
            </div>
            {/* footer contain */}
            <div className='footer-details'>
                <p><FaTelegramPlane></FaTelegramPlane><span style={{ margin: "2px" }}>Dhaka +(880) 183 224-0871</span>
                    <span style={{ margin: '5px' }}><FaMailBulk></FaMailBulk> info@headless.ltd</span></p>
                <p>68/8-B, Zigatola PO, Dhaka-1209</p>
                <p>copyright@<span style={{ margin: "5px" }}><Link to='/'>Headless Technology ltd</Link></span></p>

            </div>
            {/* social icons */}
            <div className='footer-social-icon'>
                <p>Follow us: </p>
                <div className='icon'><Link to={'https://www.instagram.com/shakil_ahmed_aries/'}><FaInstagram></FaInstagram></Link></div>
                <div className='icon'> <Link to={'https://www.facebook.com/shakilahmedaries01/'}><FaFacebookF ></FaFacebookF></Link> </div>
                <div className='icon'><Link to={'https://www.instagram.com/shakil_ahmed_aries/'}><FaInstagram></FaInstagram></Link></div>

            </div>

        </footer >
    );
};

export default Footer;