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
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

//this is way too many props but im in too deep now
export const Reply = ({
  img,
  id,
  replyingTo,
  setReply,
  width,
  edit,
  setEdit,
  rId,
}: ReplyProps) => {
  const [value, setValue] = useState<string>("");
  const { handleAdd, handleEdit, comms } = useComments();

  //new comment object
  const newComment = {
    id: Math.floor(Math.random() * 1000),
    content: value,
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
        value={value}
        placeholder="Add a comment..."
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          edit ? handleEdit(id, rId!, value) : handleAdd(id, newComment);
          setValue("");
          setReply && setReply!(false);
          setEdit && setEdit(false);
        }}
      >
        {edit ? "Update" : "REPLY"}
      </button>
    </div>
  );
};
