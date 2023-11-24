import "./post.css";
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://st2.depositphotos.com/1967477/8364/v/950/depositphotos_83642530-stock-illustration-happy-cartoon-emoticon.jpg"
              alt=""
            />
            <span className="postUsername">
              Tujuane
            </span>
            <span className="postDate"><strong>{post.title}</strong></span>
          </div>
          <div className="postTopRight">
            <MdMoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.content}</span>
          <img className="postImg" src={post.image_url} alt="" />
        </div>
        <div className="postBottom">
        </div>
      </div>
    </div>
  );
}