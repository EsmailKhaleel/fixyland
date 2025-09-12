import Room1 from "../assets/room-1.jpg";
import Room2 from "../assets/room-2.jpg";
import Room3 from "../assets/room-3.jpg";
import Room4 from "../assets/room-4.jpg";
import Room5 from "../assets/room-5.jpg";
import Room6 from "../assets/room-6.jpg";
import Room7 from "../assets/room-7.jpg";
import Room8 from "../assets/room-8.jpg";
import Room9 from "../assets/room-9.jpg";

import { FaKitMedical, FaLock } from "react-icons/fa6";
import {
  FaBath,
  FaClock,
  FaCoffee,
  FaDumbbell,
  FaFan,
  FaParking,
  FaPhone,
  FaShower,
  FaSpa,
  FaSwimmingPool,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const rooms = [
  {
    id: 1,
    title: "Junior Rooms",
    price: "$400",
    image: Room1,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 2,
    title: "Family Rooms",
    price: "$600",
    image: Room2,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 3,
    title: "Single Rooms",
    price: "$750",
    image: Room3,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 4,
    title: "Deluxe Rooms",
    price: "$850",
    image: Room4,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 5,
    title: "Suite Rooms",
    price: "$950",
    image: Room5,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 6,
    title: "Double Rooms",
    price: "$1050",
    image: Room6,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 7,
    title: "Premium Rooms",
    price: "$1250",
    image: Room7,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 8,
    title: "Luxury Rooms",
    price: "$1500",
    image: Room8,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 9,
    title: "Presidential Rooms",
    price: "$2000",
    image: Room9,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
];

export const roomDetails = {
  id: 1,
  title: "Junior Rooms",
  price: "$400",
  image: Room1,
  images: [Room1, Room2, Room3],
  space: "30 m²",
  guests: "Max 2 Guests",
  beds: "2 Beds",
  bath: "1 Bath",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda dolorum molestiae voluptates, voluptate, facilis iure cumque eum fugit nihil harum dolor quas dolorem mollitia excepturi explicabo aut voluptatibus totam! Nulla quas quae, cupiditate sapiente aliquam.",
  description2:
  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  roomAmenities: {
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    items: [
      { icon: FaWifi, label: "Fast Wifi" },
      { icon: FaCoffee, label: "Coffee" },
      { icon: FaBath, label: "Bath" },
      { icon: FaShower, label: "Shower" },
      { icon: FaKitMedical, label: "Medical kit" },
      { icon: FaFan, label: "Air Conditioning" },
      { icon: FaPhone, label: "Phone" },
      { icon: FaLock, label: "Smart Security" },
    ],
  },

  hotelAmenities: {
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    items: [
      { icon: FaDumbbell, label: "Gym" },
      { icon: FaParking, label: "Parking" },
      { icon: FaSwimmingPool, label: "Swimming Pool" },
      { icon: FaUtensils, label: "Restaurant" },
      { icon: FaTshirt, label: "Laundry" },
      { icon: FaSpa, label: "Spa" },
      { icon: FaClock, label: "24 Hour Concierge" },
    ],
  },
  rules: {
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    checkOut: "10:30 AM",
    checkIn: "3:00 PM – 9:00 PM",
    policies: [
      "Smoking not allowed",
      "Pets not allowed",
      "Identification document is must for hotel registration.",
    ],
  },

  cancellation: {
    description:
      "Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque quis orci sed hendrerit sed ut dolor. Cancel up to 14 days to get a full refund.",
  },
};

export default rooms;
