import React, { useState } from 'react';
import axios from 'axios';

export const CommentsCreate = ({ postId }) => {
  const [content, setContent] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label>New Comment</label>
          <input
            className="form-control mb-3"
            onChange={(e) => setContent(e.target.value)}
            type="text"
            value={content}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
