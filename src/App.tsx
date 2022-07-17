import "./styles/App.css";
import { useComments } from "./context/CommentsContext";
import { MainComment } from "./components/MainComment";

export const App: React.FC = () => {
  const { handleAdd, handleDelete, comms } = useComments();

  return <MainComment comms={comms} />;
};
