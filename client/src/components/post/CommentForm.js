import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions/post.actions';

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  const handleChange = e => setText(e.target.value);
  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a comment...</h3>
      </div>
      <form onSubmit={e => handleSubmit(e)} className='form my-1'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a comment'
          required
          onChange={e => handleChange(e)}
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
