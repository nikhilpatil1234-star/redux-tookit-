import React from "react";
import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";
import AuthorPost from "./AuthorPost";
import { selectAllPosts } from "./postSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const postList = () => {
  // const post = useSelector((state) => state.posts);
  const post = useSelector(selectAllPosts); // for dynamicall changing state you can only change that in postSlice
  // console.log(post)
  const orderedPost = post.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderPost = orderedPost.map((item) => {
    return (
      <div key={item.id} style={{ border: "1px solid grey", margin: "20px" }}>
        <h1>{item.title} </h1>
        <h2> {item.content}</h2>
        <p>
          {" "}
          <AuthorPost userId={item.id} />
        </p>
        <p>
          {" "}
          <TimeAgo timestamp={item.date} />
        </p>
        <ReactionButton post={item} />
      </div>
    );
  });
  return (
    <div>
      <AddPostForm />
      <div style={{ border: "1px solid grey", width: "50%", margin: "5%" }}>
        <h1> posts</h1>
        {renderPost}
      </div>
    </div>
  );
};

export default postList;
