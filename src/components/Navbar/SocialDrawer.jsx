import  { recentPosts } from "../RecentPosts"
import DashedLine from "../ui/DashedLine"
import DrawerBase from "./DrawerBase"
import RecentPostCard from "../RecentPostCard"
import { contacts } from "../../sections/ContactUs/GetInTouchCard"
import ContactCardItem from "../ContactCardItem"
import SocialMediaButtons from "../SocialMediaButtons"
function SocialDrawer({ setIsDrawerOpen }) {
    return (
        <DrawerBase setIsDrawerOpen={setIsDrawerOpen}>
            <div className="flex flex-col gap-8 px-4 sm:px-6">
                <p className="text-gray-600 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Recent Posts</h2>
                        <DashedLine />
                    </div>
                    <div className="flex flex-col gap-1">
                        {recentPosts.map((post, index) => (
                            <RecentPostCard key={index} post={post} isLastItem={index === recentPosts.length - 1} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Contact</h2>
                        <DashedLine />
                    </div>
                    <div className="flex flex-col gap-4">
                        {contacts.map((contact, index) => (
                            <ContactCardItem key={index} contact={contact} iconColor="text-primary"/>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Social Media</h2>
                        <DashedLine />
                    </div>
                    <SocialMediaButtons color="bg-black" iconColor="text-white"/>
                </div>
            </div>
        </DrawerBase>
    )
}

export default SocialDrawer