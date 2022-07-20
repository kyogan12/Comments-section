interface User {
  image: string;
  username: string;
  createdAt: string;
}

export const User = ({ image, username, createdAt }: User) => {
  return (
    <div className="user">
      <img src={require(`${image}`)} alt="avt" />
      <h3>{username}</h3>
      {username === "juliusomo" && <p className="you">you</p>}
      <p className="created-at">{createdAt}</p>
    </div>
  );
};
