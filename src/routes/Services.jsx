import { Outlet } from "react-router-dom";
import ServiceSideNavigation from "../components/navigation/ServiceSideNavigation";

const Services = () => {
  return (
    <>
      <div className="lg:grid px-4 grid-cols-12 py-12 relative">
        <div className="navigation hidden lg:block col-span-3 lg:col-span-2">
          <ServiceSideNavigation />
        </div>
        <div className="layout col-span-9 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Services;
