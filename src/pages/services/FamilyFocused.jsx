import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const FamilyFocused = () => <ServiceDetailPage service={getServiceBySlug("family-focused-services")} />;

export default FamilyFocused;
