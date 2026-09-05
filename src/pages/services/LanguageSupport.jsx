import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const LanguageSupport = () => <ServiceDetailPage service={getServiceBySlug("language-support")} />;

export default LanguageSupport;
