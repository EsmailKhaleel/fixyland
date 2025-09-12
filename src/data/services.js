import ServiceImage1 from "../assets/services-1.jpg";
import ServiceImage2 from "../assets/services-2.jpg";
import ServiceImage3 from "../assets/services-3.jpg";
import ServiceImage4 from "../assets/services-4.jpg";
import ServiceImage5 from "../assets/services-5.jpg";
import ServiceImage6 from "../assets/services-6.jpg";
import ServiceImage7 from "../assets/services-7.jpg";
import ServiceImage8 from "../assets/services-8.jpg";
import ServiceImage9 from "../assets/services-9.jpg";

import TreadmillIcon from "../components/ui/TreadmillIcon";
import SpaIcon from "../components/ui/SpaIcon";
import PoolIcon from "../components/ui/PoolIcon";
import SwimIcon from "../components/ui/SwimIcon";
import TransportationIcon from "../components/ui/TransportationIcon";
import LaundryIcon from "../components/ui/LaundryIcon";
import WifiIcon from "../components/ui/WifiIcon";
import LoungeIcon from "../components/ui/LoungeIcon";
import SpoonIcon from "../components/ui/SpoonIcon";

const services = [
  { icon: TreadmillIcon, label: "Fitness Center", image: ServiceImage1 },
  { icon: PoolIcon, label: "Jacuzzi", image: ServiceImage2 },
  { icon: SwimIcon, label: "Swimming Pool", image: ServiceImage3 },
  { icon: SpaIcon, label: "Spa Treatments", image: ServiceImage4 },
  {
    icon: TransportationIcon,
    label: "Airport Transportation",
    image: ServiceImage5,
  },
  { icon: LaundryIcon, label: "Laundry Service", image: ServiceImage6 },
  { icon: WifiIcon, label: "Free Wifi", image: ServiceImage7 },
  { icon: LoungeIcon, label: "Lounge Bar", image: ServiceImage8 },
  { icon: SpoonIcon, label: "Restaurant", image: ServiceImage9 },
];

export default services;
