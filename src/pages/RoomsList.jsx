import { useRef, useState } from "react";
import BreadcrumbSection from "../components/BreadcrumbSection";
import rooms from "../data/rooms";
import FadeIn from "../components/ui/FadeIn";
import RoomCard2 from "../components/RoomCard2";
import Pagination from "../components/ui/Pagination";
import SubscribeSection from "../components/SubscribeSection";
import HorizontalRoomCard from "../components/HorizontalRoomCard";

function RoomsList() {
    const gridRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentRooms = rooms.slice(start, end);
    
    return (
        <main>
            <BreadcrumbSection title="Rooms List" />
            <section className="section-padding bg-primary-light w-full">
                <div ref={gridRef} className="grid grid-cols-1 gap-8 ">
                    {currentRooms.map((room, index) => (
                        <FadeIn key={room.id} direction="up" delay={0.1 * index}>
                            <HorizontalRoomCard room={room} />
                        </FadeIn>
                    ))}
                </div>
                <FadeIn direction="up" delay={0.2} className={"mt-12"}>
                    <Pagination
                        totalItems={rooms.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </FadeIn>
            </section>
            <SubscribeSection />
        </main>
    );
}

export default RoomsList