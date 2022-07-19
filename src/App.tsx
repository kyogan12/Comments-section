import "./styles/App.css";
import { useComments } from "./context/CommentsContext";
import { MainComment } from "./components/MainComment";

export const App: React.FC = () => {
  const { comms } = useComments();

  return <MainComment comms={comms} />;
};
