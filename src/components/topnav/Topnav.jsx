import "./topnav.css";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Topnav() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Tujuane social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <RxAvatar />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <IoChatboxEllipsesOutline />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotificationsOutline />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/19211470/pexels-photo-19211470/free-photo-of-a-smiling-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}