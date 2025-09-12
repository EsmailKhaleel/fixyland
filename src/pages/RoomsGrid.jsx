import { useState } from "react";
import BreadcrumbSection from "../components/BreadcrumbSection";
import RoomCard2 from "../components/RoomCard2";
import SubscribeSection from "../components/SubscribeSection";
import Pagination from "../components/ui/Pagination";
import rooms from "../data/rooms";
import FadeIn from "../components/ui/FadeIn";

function RoomsGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentRooms = rooms.slice(start, end);

    return (
        <main>
            <BreadcrumbSection title="Rooms Grid" />
            <section className="section-padding bg-primary-light w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                    {currentRooms.map((room, index) => (
                        <FadeIn key={room.id} direction="up" delay={0.1 * index}>
                            <RoomCard2 room={room} />
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

export default RoomsGrid;
