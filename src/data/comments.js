import User1 from "../assets/user-1.png";
import User3 from "../assets/user-3.png";
import User4 from "../assets/user-4.png";
import User5 from "../assets/user-5.png";
import User6 from "../assets/user-6.png";
const comments = [
  {
    author: "John Doe",
    date: "3 days ago",
    comment:
      "Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault with man who chooses to enjoy.",
    userImage: User3,
    replies: [
      {
        author: "John Doe",
        date: "2 days ago",
        comment:
          "Undertakes laborious physical exercise, except to obtain some advantage from it who has but who has any right to find fault with man who chooses to enjoy.",
        userImage: User4,
      },
    ],
  },
  {
    author: "John Doe",
    date: "2 days ago",
    comment:
      "Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault with man who chooses to enjoy.",
    userImage: User5,
  },
  {
    author: "John Doe",
    date: "1 day ago",
    comment:
      "Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault with man who chooses to enjoy.",
    userImage: User6,
  },
];

const author = {
  name: "Richard M. Fudge",
  image: User1,
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export { comments, author };
