// Modules

// Types
interface Props {
  className: string;
}

const WhiteLoader = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <svg className="spinner-white" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default WhiteLoader;
