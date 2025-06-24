import { Link } from "react-router-dom";
const AccountDeleted = () => {
  return (
    <div className="p-16 fixed top-10 left-0 w-full h-full flex justify-center items-center z-50">
      <h2>Your account has been permanently deleted.</h2>
      <p>We're sad to see you go.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default AccountDeleted;
