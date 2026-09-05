import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceBreadcrumb = ({ currentLabel }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-[#6a7a72]">
      <li><Link to="/" className="inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-[#6a7a72] no-underline transition hover:text-primary"><Home className="size-3.5" />Home</Link></li>
      <li aria-hidden="true"><ChevronRight className="size-3.5 text-[#a3afa9]" /></li>
      <li><Link to="/services" className="rounded-md px-1 py-1 text-[#6a7a72] no-underline transition hover:text-primary">Services</Link></li>
      {currentLabel && <><li aria-hidden="true"><ChevronRight className="size-3.5 text-[#a3afa9]" /></li><li><span className="px-1 py-1 text-[#203b31]" aria-current="page">{currentLabel}</span></li></>}
    </ol>
  </nav>
);

export default ServiceBreadcrumb;
