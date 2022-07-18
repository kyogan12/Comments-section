import { useState } from "react";
import { Reply } from "./Reply";
import { useComments } from "../context/CommentsContext";
import replyImg from "./images/icon-reply.svg";

interface Image {
  img: string;
  id: number;
  rId: number;
  replyingTo: string;
}

export const ReplyText = ({ img, id, rId, replyingTo }: Image) => {
  const [reply, setReply] = useState<boolean>(false);
  const { handleDelete } = useComments();

  return (
    <>
      {replyingTo === "juliusomo" ? (
        <>
          <p className="reply-delete" onClick={() => handleDelete(id, rId)}>
            Delete
          </p>
          <p className="reply-edit">Edit</p>
        </>
      ) : (
        <p className="reply-text" onClick={() => setReply(!reply)}>
          <img className="reply-img" src={replyImg} alt="avt" />
          Reply
        </p>
      )}

      {reply && (
        <Reply id={id} replyingTo={replyingTo} img={img} setReply={setReply} />
      )}
    </>
  );
};
