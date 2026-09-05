import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const EducationalResources = () => <ServiceDetailPage service={getServiceBySlug("educational-resources")} />;

export default EducationalResources;
