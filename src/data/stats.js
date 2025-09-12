import { FaBath, FaBed, FaPencilRuler, FaUsers } from "react-icons/fa";
import { roomDetails } from "./rooms";

const stats = [
  {
    icon: FaPencilRuler,
    label: "Room Space",
    value: roomDetails.space,
  },
  {
    icon: FaUsers,
    label: "Guests",
    value: roomDetails.guests,
  },
  {
    icon: FaBed,
    label: "Beds",
    value: roomDetails.beds,
  },
  {
    icon: FaBath,
    label: "Bath",
    value: roomDetails.bath,
  },
];

export default stats;