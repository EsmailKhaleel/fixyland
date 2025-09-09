import BreadcrumbSection from "../components/BreadcrumbSection"
import RestaurantSection from "../components/RestaurantSection"
import { meals, desserts, softDrinks } from "../data/restaurant"
import BookingTableSection from "../sections/Restaurant/BookingTableSection"

function Restaurant() {
    return (
        <main>
            <BreadcrumbSection title="Restaurant" />
            <RestaurantSection
                data={meals}
                badgeText="Fresh & Healthy"
                title="Delicious Meals For You"
                bgColor="bg-gray-100"
            />
            <RestaurantSection
                data={desserts}
                badgeText="Sweet & Tasty"
                title="Sweet Treats Just For You"
                bgColor="bg-primary-light"
            />
            <RestaurantSection
                data={softDrinks}
                badgeText="Cool & Refreshing"
                title="Refreshing Drinks For You"
                bgColor="bg-gray-100"
            />
            <BookingTableSection />
        </main>
    )
}

export default Restaurant