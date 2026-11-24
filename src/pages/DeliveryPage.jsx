import Delivery from "@/components/screens/delivery/Delivery";
import { useApp } from "@/context/AppContext";

function DeliveryPage() {
  const { deliveries, onDeliveryComplete } = useApp();

  return (
    <Delivery deliveries={deliveries} onDeliveryComplete={onDeliveryComplete} />
  );
}

export default DeliveryPage;
