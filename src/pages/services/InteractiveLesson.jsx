import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const InteractiveLesson = () => <ServiceDetailPage service={getServiceBySlug("interactive-lessons")} />;

export default InteractiveLesson;
