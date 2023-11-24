import Post from "../post/Post";
import "./feed.css";
import Share from "../share /Share";
import React, { useEffect } from "react";
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    // Use an async function to fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        const response = await axios.get('http://127.0.0.1:3000/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming the response data is an array of posts
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  console.log(posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} 
      </div>
    </div>
  );
}
