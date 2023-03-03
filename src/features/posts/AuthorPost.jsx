import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AuthorPost = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  //   console.log(userId);
  const author = users.find((user) => user.id === userId);

  return (
    <div>
      <span style={{ color: "red" }}>by {author ? author.name : "null"}</span>
    </div>
  );
};

export default AuthorPost;
