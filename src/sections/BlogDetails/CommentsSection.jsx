import FadeIn from "../../components/ui/FadeIn";
import CommentCard from "../../components/CommentCard";

function CommentsSection({ comments }) {
  return (
    <div className="flex flex-col gap-8">
      <FadeIn direction="up" delay={0.2}>
        <h2 className="text-3xl font-bold">{comments.length} Comments</h2>
      </FadeIn>

      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          author={comment.author}
          date={comment.date}
          comment={comment.comment}
          userImage={comment.userImage}
          onReply={() => console.log('Reply clicked')}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default CommentsSection;
