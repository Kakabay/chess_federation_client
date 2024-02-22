// Modules
import { Link } from "react-router-dom";

// Types
interface Props {
  img: string;
  name: string;
  start: string;
  end: string;
  place: string;
}

const Tournament = ({ img, name, start, end, place }: Props) => {
  return (
    <Link to={"/"} className="tournament">
      <div className="tournament-top">
        <div></div>
        <img src={img} alt="" />
      </div>
      <div className="tournament-bottom">
        <h3>{name}</h3>
        <p>
          <span>{`${start} - ${end}`}</span>
          <span className="separator">|</span>
          <span>{place}</span>
        </p>
      </div>
    </Link>
  );
};

export default Tournament;
