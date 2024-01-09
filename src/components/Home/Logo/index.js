import LogoM from '../../../assets/images/MaxBackground.png';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoM} alt="JavaScript, Developer" />
    </div>
  );
};

export default Logo;
