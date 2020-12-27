import '../../styles/css/Footer.css';

import FacebookSVG from '../../assets/images/icons/socials/facebook.svg'
import InstagramSVG from '../../assets/images/icons/socials/instagram.svg'
import LinkedinSVG from '../../assets/images/icons/socials/linkedin.svg'
import TwitterSVG from '../../assets/images/icons/socials/twitter.svg'
import YoutubeSVG from '../../assets/images/icons/socials/youtube.svg'

function Footer() {
    return (
        <footer>
            <div className="copyright">
                <p>© Copyright 2020 WebBox.</p>
            </div>
            <div className="title">
                <p>WebBox Front-end Developer Exercise</p>
            </div>
            <div className="socials">
                <a href="https://en-gb.facebook.com/webboxdigital/">
                    <img src={FacebookSVG} />
                </a>
                <a href="https://twitter.com/webboxdigital?lang=en">
                    <img src={TwitterSVG} />
                </a>
                <a href="https://www.instagram.com/webboxdigital/?hl=en">
                    <img src={InstagramSVG} />
                </a>
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <img src={YoutubeSVG} />
                </a>
                <a href="https://www.linkedin.com/company/webbox-digital/">
                    <img src={LinkedinSVG} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;