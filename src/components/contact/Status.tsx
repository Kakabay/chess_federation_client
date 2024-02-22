// Types
interface Props {
  success: boolean;
  active: boolean;
  message: {
    success: string;
    error: string;
  };
}

const Status = ({ success, message, active }: Props) => {
  return (
    <div
      className={
        active ? (success ? "status success" : "status error") : "status"
      }
    >
      <p>{success ? message.success : message.error}</p>
    </div>
  );
};

export default Status;
