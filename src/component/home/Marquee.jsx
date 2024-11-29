import Marquee from "react-fast-marquee";
import icon1 from '../../assets/image/adidas.svg'
import icon2 from '../../assets/image/abbott.svg'
import icon3 from '../../assets/image/google.svg'
import icon4 from '../../assets/image/fedex.svg'
import icon5 from '../../assets/image/visa.svg'
import icon6 from '../../assets/image/paypal.svg'
import icon7 from '../../assets/image/toyota.svg'

const MarqueeSlide = () => {
    return (
        <div>
            <Marquee>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
                <img src={icon7} alt="" />
            </Marquee>
        </div>
    );
};

export default MarqueeSlide;