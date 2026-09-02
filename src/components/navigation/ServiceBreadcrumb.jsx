import { Link, useLocation } from "react-router-dom";

const toLabel = (segment) =>
segment.
split("-").
filter(Boolean).
map((part) => part.charAt(0).toUpperCase() + part.slice(1)).
join(" ");

const ServiceBreadcrumb = ({ currentLabel }) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const serviceIndex = segments.indexOf("services");

  if (serviceIndex === -1) {
    return null;
  }

  const trail = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" }];

  const serviceSegments = segments.slice(serviceIndex + 1);

  serviceSegments.forEach((segment, index) => {
    const isLast = index === serviceSegments.length - 1;
    const to = `/services/${serviceSegments.slice(0, index + 1).join("/")}`;

    trail.push({
      label: isLast && currentLabel ? currentLabel : toLabel(segment),
      to
    });
  });
  if (serviceSegments.length === 0 && currentLabel) {
    trail.push({ label: currentLabel, to: pathname });
  }

  return (
    <nav
      aria-label="Breadcrumb">

      
      <div>
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;

          return (
            <div key={item.to}>
              {isLast ?
              <span aria-current="page">
                  {item.label}
                </span> :

              <Link to={item.to}>
                  {item.label}
                </Link>
              }
              {!isLast && <span>/</span>}
            </div>);

        })}
      </div>
    </nav>);

};

export default ServiceBreadcrumb;
