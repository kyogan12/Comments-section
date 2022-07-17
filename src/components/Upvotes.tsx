import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

interface Comment {
  comment: number;
}

export const Upvotes = ({ comment }: Comment) => {
  return (
    <div className="upvotes">
      <img src={plus} alt="" />
      <p className="score">{comment}</p>
      <img src={minus} alt="" />
    </div>
  );
};
