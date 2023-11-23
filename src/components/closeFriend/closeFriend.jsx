import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="https://images.pexels.com/photos/16486462/pexels-photo-16486462/free-photo-of-woman-wearing-earmuffs-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
      <span className="sidebarFriendName">User One</span>
    </li>
  );
}