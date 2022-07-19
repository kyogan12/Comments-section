import { createContext, ReactNode, useContext, useState } from "react";
import data from "../components/data/data.json";

type CommentsContextProviderProps = {
  children: ReactNode;
};

interface CommentsContext {
  handleDeleteReplies: (id: number, rId: number) => void;
  handleAdd: (id: number, newCom: any) => void;
  handleDelete: (id: number) => void;
  handleUpvotes: (id: number, action: string) => void;
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

export const CommentsContext = createContext({} as CommentsContext);

export const useComments = () => {
  return useContext(CommentsContext);
};

export const CommentsContextProvider = ({
  children,
}: CommentsContextProviderProps) => {
  const [comms, setComms] = useState(data);

  const handleAdd = (id: number, newComment: any) => {
    if (newComment.replyingTo === "") {
      comms.comments.push(newComment);
    }
    const add = comms.comments.map((com) => {
      if (com.id === id) {
        com.replies.push(newComment);
        return com;
      } else {
        return com;
      }
    });
    setComms({ ...comms, comments: add });
  };

  const handleDelete = (id: number) => {
    const filtered = comms.comments.filter((comms) => comms.id !== id);
    setComms({ ...comms, comments: filtered });
  };

  const handleDeleteReplies = (id: number, rId: number) => {
    const filtered = comms.comments.map((com) => {
      if (com.id === id) {
        const filtered = com.replies.filter((reply) => reply.id !== rId);
        return { ...com, replies: filtered };
      } else {
        return com;
      }
    });
    setComms({ ...comms, comments: filtered });
  };

  const handleUpvotes = (id: number, action: string) => {
    const upvoted = comms.comments.map((com) => {
      if (com.id === id) {
        return action === "+"
          ? { ...com, score: com.score + 1 }
          : { ...com, score: com.score - 1 };
      } else {
        //in case im not trying to upvote a comment im checking for replies
        const upvotedReply = com.replies.map((reply) => {
          if (reply.id === id) {
            return action === "+"
              ? { ...reply, score: reply.score + 1 }
              : { ...reply, score: reply.score - 1 };
          } else {
            return reply;
          }
        });
        return { ...com, replies: upvotedReply };
      }
    });
    setComms({ ...comms, comments: upvoted });
  };

  return (
    <CommentsContext.Provider
      value={{
        handleAdd,
        handleDeleteReplies,
        handleDelete,
        handleUpvotes,
        comms,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
