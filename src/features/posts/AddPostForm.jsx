// import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [userId, setUserId] = useState();
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);
  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })               it will handled in postslice itself
        postAdded(title, content, userId)
      );
      setTitle("");
      setContent("");
      setUserId("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div className="container" style={{ width: "40%" }}>
      <h3> Add new post</h3>
      <Form>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Enter Title"
            value={title}
            onChange={onTitleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>author:</Form.Label>
          <Form.Control
            as="select"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChange}
          >
            <option value="">select</option>
            {usersOptions}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="enter your content"
            value={content}
            onChange={onContentChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={!canSave}
          onClick={onSavePostClicked}
        >
          Save post
        </Button>
      </Form>
    </div>
  );
};

export default AddPostForm;
