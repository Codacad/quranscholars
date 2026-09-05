import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const PersonalGuidance = () => <ServiceDetailPage service={getServiceBySlug("personal-guidance")} />;

export default PersonalGuidance;
