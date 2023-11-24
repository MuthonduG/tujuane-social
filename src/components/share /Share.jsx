import "./share.css";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineRoom } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Share() {
  const token = localStorage.getItem('authToken');

  // Check if the token exists before logging it
  if (token) {
    console.log('Authorization Token:', token);
  } else {
    console.log('No Authorization Token found.');
  }
  
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
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
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
