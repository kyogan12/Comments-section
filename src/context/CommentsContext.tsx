import { createContext, ReactNode, useContext, useState } from "react";
import data from "../components/data/data.json";

type CommentsContextProviderProps = {
  children: ReactNode;
};

interface CommentsContext {
  handleDelete: (id: number, rId: number) => void;
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
  handleAdd: (id: number, newCom: any) => void;
}

interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
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

  const handleDelete = (id: number, rId: number) => {
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

  const handleAdd = (id: number, newCom: Reply) => {
    const add = comms.comments.map((com) => {
      if (com.id === id) {
        com.replies.push(newCom);
        return com;
      } else {
        return com;
      }
    });
    setComms({ ...comms, comments: add });
  };

  return (
    <CommentsContext.Provider value={{ handleAdd, handleDelete, comms }}>
      {children}
    </CommentsContext.Provider>
  );
};
