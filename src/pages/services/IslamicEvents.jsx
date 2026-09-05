import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const IslamicEvents = () => <ServiceDetailPage service={getServiceBySlug("islamic-events")} />;

export default IslamicEvents;
