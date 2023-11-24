import "./sidebar.css";
import { FaRss } from "react-icons/fa";
import { BsChatSquareHeart } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaRss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsChatSquareHeart className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}