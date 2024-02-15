import styles from '../styles';
import { robot } from '../assets';
const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-col font-poppins font-normal text-white">
        <h2>20% DISCOUNT FOR 1 MONTH ACCOUNT</h2>
        <h1>The Next Generation Payment Method</h1>
        <p>
          Out team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <img src={robot} alt="robot" />

      
    </div>
  );
};

export default Hero;
