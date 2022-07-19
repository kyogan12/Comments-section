import { useState } from "react";
import { Reply } from "./Reply";
import { useComments } from "../context/CommentsContext";
import replyImg from "./images/icon-reply.svg";

interface ReplyTextProps {
  img: string;
  id: number;
  rId: number;
  replyingTo: string;
  username: string;
  width: number;
}

export const ReplyText = ({
  img,
  id,
  rId,
  replyingTo,
  username,
  width,
}: ReplyTextProps) => {
  const [reply, setReply] = useState<boolean>(false);
  const [delPopUp, setDelPopUp] = useState<boolean>(false);
  const { handleDeleteReplies, handleDelete } = useComments();

  return (
    <>
      {username === "juliusomo" ? (
        <div className="selection-cont">
          <p className="reply-delete" onClick={() => setDelPopUp(true)}>
            Delete
          </p>
          <p
            onClick={() => {
              replyingTo === "juliusomo"
                ? handleDelete(id)
                : handleDeleteReplies(id, rId);
            }}
            className="reply-edit"
          >
            Edit
          </p>
        </div>
      ) : (
        <p className="reply-text" onClick={() => setReply(!reply)}>
          <img className="reply-img" src={replyImg} alt="avt" />
          Reply
        </p>
      )}
      {delPopUp && (
        <div className="delete-popup">
          <h3>Delete Comment</h3>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="btn-container">
            <button onClick={() => setDelPopUp(false)} className="btn-no">
              NO, CANCEL
            </button>
            <button
              onClick={() => {
                replyingTo === "juliusomo"
                  ? handleDelete(id)
                  : handleDeleteReplies(id, rId);
              }}
              className="btn-yes"
            >
              YES, DELETE
            </button>
          </div>
        </div>
      )}
      {reply && (
        <Reply
          width={width}
          id={id}
          replyingTo={replyingTo}
          img={img}
          setReply={setReply}
        />
      )}
    </>
  );
};
