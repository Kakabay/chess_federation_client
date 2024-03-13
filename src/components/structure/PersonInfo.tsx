// Modules

// Types
import { personProps } from '../../types/personProps';

// Icons
import mail from '../../icons/email.svg';
import phone from '../../icons/phone.svg';
import fb from '../../icons/facebook-green.svg';

const PersonInfo = ({ img, position, name, email, tel, facebook }: personProps) => {
  return (
    <div className="person">
      <div className="person-left">
        <div className="person-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="person-right">
        <span className="person-pos">{position}</span>
        <span className="person-name">{name}</span>
        <div className="person-right-bottom">
          <a href={`mailto:${mail}`} target={'_blank'} rel="noreferrer" className="person-data">
            <div className="person-icon">
              <img src={mail} alt="" />
            </div>
            <span>{email}</span>
          </a>
          <a href={`tel:${mail}`} target={'_blank'} rel="noreferrer" className="person-data">
            <div className="person-icon">
              <img src={phone} alt="" />
            </div>
            <span>{tel}</span>
          </a>
          <a href="/" target={'_blank'} rel="noreferrer" className="person-data">
            <div className="person-icon">
              <img src={fb} alt="" />
            </div>
            <span>{facebook}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
