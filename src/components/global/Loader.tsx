// Modules

// Icons
// import { ReactComponent as Spinner } from "../../icons/loader.svg";
import Spinner from "../../icons/loader.svg";

// Types
interface Props {
  className: string;
}

const Loader = ({ className }: Props) => {
  return (
    <div className={`loader ${className}`}>
      <img src={Spinner} alt="spinner" />
      {/* <Spinner className="spinner" /> */}
    </div>
  );
};

export default Loader;
