import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import { useComments } from "../context/CommentsContext";

interface Comment {
  comment: number;
  id: number;
}

export const Upvotes = ({ comment, id }: Comment) => {
  const { handleUpvotes } = useComments();
  return (
    <div className="upvotes">
      <img onClick={() => handleUpvotes(id, "+")} src={plus} alt="" />
      <p className="score">{comment}</p>
      <img onClick={() => handleUpvotes(id, "-")} src={minus} alt="" />
    </div>
  );
};
