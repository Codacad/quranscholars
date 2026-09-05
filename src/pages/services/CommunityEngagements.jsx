import ServiceDetailPage from "@/pages/services/ServiceDetailPage.jsx";
import { getServiceBySlug } from "@/data/servicesData.js";

const CommunityEngagements = () => <ServiceDetailPage service={getServiceBySlug("community-engagement")} />;

export default CommunityEngagements;
