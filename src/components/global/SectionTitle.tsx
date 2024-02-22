// Modules

// Icons
import bishop from "../../icons/bishop.svg";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="section-title">
      <div className="section-title-img">
        <img src={bishop} alt="" />
      </div>
      <h2 className="section-title-title">{title}</h2>
      <div className="section-title-deco">
        <div className="deco-rotated"></div>
        <div className="deco"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
