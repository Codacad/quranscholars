import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NotLoggedIn = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    return <Navigate to={"/admission"} />;
  }
  return children;
};

export default NotLoggedIn;
