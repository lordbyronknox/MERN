import React from 'react';
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [
    newUsers, 
    // setNewUsers
  ] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers.map((user) => (
        <li className="widgetSmListItem">
           <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA41xn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.userName}</span>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
