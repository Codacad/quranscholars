import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const SpiritualDevelopment = () => <ServiceDetailPage service={getServiceBySlug("spiritual-development")} />;

export default SpiritualDevelopment;
