import IconLabel from "./ui/IconLabel"
import { FaClock } from "react-icons/fa6"
import { FaReplyAll } from "react-icons/fa";
import FadeIn from "./ui/FadeIn";

function CommentCard({ author, date, comment, userImage, replies }) {
    return (
        <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col gap-6 bg-primary-light">
                <div className="p-8 rounded-md">
                    <div className="flex items-start gap-6">
                        <img
                            src={userImage}
                            alt={author}
                            className="w-28 h-auto rounded-md object-cover"
                        />
                        <div className="flex-1 flex flex-col gap-4 items-start">
                            <div className="flex items-center gap-4">
                                <h4 className="text-base text-gray-600">by <span className="font-semibold text-gray-900">{author}</span></h4>
                                <div className="w-2 border-t-2" />
                                <IconLabel
                                    icon={FaClock}
                                    label={date}
                                    textColor="text-gray-500"
                                    iconColor="text-primary"
                                    textSize="text-sm"
                                />
                            </div>
                            <p className="text-gray-600 leading-relaxed line-clamp-5">
                                {comment}
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-primary">
                                    <FaReplyAll className="w-4 h-4" />
                                    <span className="text-base text-gray-600">Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nested Replies */}
                {replies && replies.length > 0 && (
                    <>
                        <hr className="border-gray-500 mx-8" />
                        <div className="ml-16">
                            {replies.map((reply, index) => (
                                <CommentCard
                                    key={index}
                                    author={reply.author}
                                    date={reply.date}
                                    comment={reply.comment}
                                    userImage={reply.userImage}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </FadeIn>
    )
}

export default CommentCard
