import { Fragment } from "react";
import { Upvotes } from "./Upvotes";
import { User } from "./User";
import { Content } from "./Content";
import { ReplyText } from "./ReplyText";
import { Reply } from "./Reply";

export const MainComment = ({ comms }: any) => {
  return (
    <div className="main-container">
      {comms.comments.map((comment: any) => (
        <Fragment key={comment.id}>
          <div className="comment-card-main">
            <Upvotes comment={comment.score} id={comment.id} />
            <div className="wrapper">
              <User
                createdAt={comment.createdAt}
                username={comment.user.username}
                image={comment.user.image.webp}
              />
              <p className="content">{comment.content}</p>
            </div>
          </div>
          <ReplyText
            width={100}
            username={comment.user.username}
            id={comment.id}
            replyingTo={comment.user.username}
            rId={comment.id}
            img={comms.currentUser.image.webp}
          />
          {comment.replies && (
            <>
              {comment.replies.map((reply: any) => (
                <Fragment key={reply.id}>
                  <div className="comment-card-reply" key={reply.id}>
                    <Upvotes id={reply.id} comment={reply.score} />
                    <div className="wrapper">
                      <User
                        image={reply.user.image.webp}
                        createdAt={reply.createdAt}
                        username={reply.user.username}
                      />
                      <Content
                        content={reply.content}
                        replying={reply.replyingTo}
                      />
                    </div>
                  </div>
                  <ReplyText
                    width={90}
                    username={reply.user.username}
                    replyingTo={reply.replyingTo}
                    id={comment.id}
                    rId={reply.id}
                    img={comms.currentUser.image.webp}
                  />
                </Fragment>
              ))}
            </>
          )}
        </Fragment>
      ))}
      <Reply
        width={100}
        id={0}
        replyingTo={""}
        img={comms.currentUser.image.webp}
        key={""}
      />
    </div>
  );
};
