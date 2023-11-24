import "./share.css";
import React from "react";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineRoom } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";
import axios from "axios";

export default function Share() {
  const [post, setPost] = React.useState({
    title: '',
    content: '',
    image_url: ''
  })

  function handleChange(e) {
    const value = e.target.value
    const key = e.target.name 
    setPost({...post, [key]: value})
  }

  const handleSubmit = async (e) => {
    
    const postData = {
      title: post.title,
      content: post.content,
      image_url: post.image_url,
    };
  
    const token = localStorage.getItem('authToken');
  
    try {
      await axios.post('https://api-one-z7uj.onrender.com/create_post', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          alert('Your post has been shared');
        }
      });
    } catch (e) {
      console.log("Error");
    }
  };
  

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <form action="" className="share__form" onSubmit={handleSubmit}>
            <input
              placeholder="Title"
              className="shareInput"
              name="title"
              onChange={handleChange}
              required
            />
           <input
              placeholder="What's on your mind"
              className="shareInput"
              name="content"
              onChange={handleChange}
              required
            />
             <input
              placeholder="Image URL"
              className="shareInput"
              name="image_url"
              onChange={handleChange}
              required
            />
            <button className="shareButton">Share</button>

          </form>

        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdOutlinePermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <FaRegBookmark htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdOutlineRoom htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <FaRegSmileBeam htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
}
