import { Fragment } from "react";
import { Upvotes } from "./Upvotes";
import { User } from "./User";
import { Content } from "./Content";

interface MainCommentProps {
  comms: {
    currentUser: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    comments: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
      replies: any;
    }[];
  };
}

export const MainComment = ({ comms }: MainCommentProps) => {
  return (
    <div className="main-container">
      {comms.comments.map((comment) => (
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
          {comment.replies && (
            <>
              {comment.replies.map((reply: any) => (
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
              ))}
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};
