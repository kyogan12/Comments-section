import { useState } from "react";
import { useComments } from "../context/CommentsContext";

interface ReplyProps {
  img: string;
  id: number;
  replyingTo: string;
  setReply: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Reply = ({ img, id, replyingTo, setReply }: ReplyProps) => {
  const [value, setValue] = useState<string>("");
  const { handleAdd, comms } = useComments();

  const newComment = {
    content: value,
    id: value,
    createdAt: "Just now",
    score: 0,
    replyingTo: replyingTo,
    user: {
      image: {
        webp: comms.currentUser.image.webp,
        png: comms.currentUser.image.png,
      },
      username: comms.currentUser.username,
    },
  };

  return (
    <div className="reply-box">
      <img src={require(`${img}`)} alt="avt" />
      <textarea onChange={(e) => setValue(e.target.value)}></textarea>
      <button
        onClick={() => {
          handleAdd(id, newComment);
          setReply(false);
        }}
      >
        REPLY
      </button>
    </div>
  );
};
