import services from "../../assets/serviceData.json";
import ServiceCard from "./ServiceCard";


export default function ServiceList() {
  return (
    <div className="service-list">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
