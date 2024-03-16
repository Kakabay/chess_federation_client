// Modules

// Icons
import bishop from '../../icons/bishop.svg';
import king from '../../icons/king.svg';
import rook from '../../icons/rook.svg';
import horse from '../../icons/horse.svg';
import arrRight from '../../icons/arr-right.svg';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  icon: 'rook' | 'horse' | 'king' | 'bishop';
  link?: string;
  linkName?: string;
}

const SectionTitle = ({ title, icon, link, linkName }: Props) => {
  return (
    <div className="section-title">
      <div className="section-title-inner">
        <div className="section-title-img">
          <img
            src={
              icon === 'bishop'
                ? bishop
                : icon === 'horse'
                ? horse
                : icon === 'king'
                ? king
                : icon === 'rook'
                ? rook
                : bishop
            }
            alt=""
          />
        </div>
        <h2 className="section-title-title">{title}</h2>
      </div>
      {link && linkName ? (
        <Link to={link} className="section-title-link">
          {linkName}
          <img src={arrRight} alt="chevron" />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionTitle;
