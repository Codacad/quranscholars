import { Navigate, useLocation, useParams } from "react-router-dom";

const CourseRouteRedirect = ({ basePath, includeSlug = false }) => {
  const { slug } = useParams();
  const { search, hash } = useLocation();
  const target = `${basePath}${includeSlug && slug ? `/${slug}` : ""}${search}${hash}`;

  return <Navigate to={target} replace />;
};

export default CourseRouteRedirect;
