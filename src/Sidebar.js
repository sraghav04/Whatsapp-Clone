import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import db from "./firebase";
function Sidebar() {
  // const [seed, setSeed] = useState("");

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, []);

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      {/* <h1>Sidebar panel</h1> */}
      <div className="sidebar_header">
        <Avatar
          alt="Saurav"
          // src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8amQqYgHlnq-Nmc-n2ywePMc2n2ySsIWayf6nC=s83-c-mo"
        />
        <div className="sidebar_headerRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or Start  new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
