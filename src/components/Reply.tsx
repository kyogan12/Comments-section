import { useState } from "react";
import { useComments } from "../context/CommentsContext";

interface ReplyProps {
  img: string;
  id: number;
  replyingTo: string;
  setReply?: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  edit?: boolean;
  rId?: number;
}

export const Reply = ({
  img,
  id,
  replyingTo,
  setReply,
  width,
  edit,
}: ReplyProps) => {
  const [value, setValue] = useState<string>("");
  const { handleAdd, handleEdit, comms } = useComments();

  //new comment object
  const newComment = {
    content: value,
    id: value,
    createdAt: "Just now",
    score: 0,
    replyingTo: replyingTo ? replyingTo : "",
    user: {
      image: {
        webp: comms.currentUser.image.webp,
        png: comms.currentUser.image.png,
      },
      username: comms.currentUser.username,
    },
  };

  return (
    <div style={{ width: `${width}%` }} className="reply-box">
      <img src={require(`${img}`)} alt="avt" />
      <textarea
        placeholder="Add a comment..."
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          edit ? handleEdit(value) : handleAdd(id, newComment);
          setValue("");
          setReply && setReply!(false);
        }}
      >
        {edit ? "Update" : "REPLY"}
      </button>
    </div>
  );
};
