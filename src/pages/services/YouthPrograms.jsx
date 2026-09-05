import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const YouthPrograms = () => <ServiceDetailPage service={getServiceBySlug("youth-programs")} />;

export default YouthPrograms;
