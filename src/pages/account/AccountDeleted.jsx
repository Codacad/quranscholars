import { Link } from "react-router-dom";
const AccountDeleted = () => {
  return (
    <div>
      <h2>Your account has been permanently deleted.</h2>
      <p>We're sad to see you go.</p>
      <Link to="/">Return to Home</Link>
    </div>);

};

export default AccountDeleted;
