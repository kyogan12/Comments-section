import { Fragment } from "react";
import { Upvotes } from "./Upvotes";
import { User } from "./User";
import { Content } from "./Content";
import { ReplyText } from "./ReplyText";

export const MainComment = ({ comms }: any) => {
  return (
    <div className="main-container">
      {comms.comments.map((comment: any) => (
        <Fragment key={comment.id}>
          <div className="comment-card-main">
            <Upvotes comment={comment.score} />
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
                    <Upvotes comment={reply.score} />
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
                    replyingTo={reply.user.username}
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
    </div>
  );
};
