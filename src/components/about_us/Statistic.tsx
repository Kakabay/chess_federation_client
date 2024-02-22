// Types
interface Props {
  count: number;
  title: string;
}

const Statistic = ({ count, title }: Props) => {
  return (
    <div className="stat">
      <div className="stat-square">
        <span>{count}</span>
      </div>
      <p className="stat-title">{title}</p>
    </div>
  );
};

export default Statistic;
