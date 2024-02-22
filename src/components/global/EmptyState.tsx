// Icons
import cloud from "../../icons/empty-state.svg";

// Types
interface Props {
  page?: boolean;
}

const EmptyState = ({ page }: Props) => {
  return (
    <div className={page ? "empty-state page" : "empty-state"}>
      <div className="empty-img">
        <img src={cloud} alt="" />
      </div>
      <div>
        <h1>Ой...</h1>
        <h2>{"Что-то пошло не так :("}</h2>
        {page ? <h2>Попробуйте перезагрузить страницу</h2> : ""}
      </div>
    </div>
  );
};

export default EmptyState;
