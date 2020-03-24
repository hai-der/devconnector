import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/post.actions';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addPost({ text });
    setText('');
  };

  const handleChange = e => setText(e.target.value);

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form onSubmit={e => handleSubmit(e)} className='form my-1'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          required
          onChange={e => handleChange(e)}
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
