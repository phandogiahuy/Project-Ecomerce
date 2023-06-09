import { AxiosInstance } from "../../service-api/requestMethods";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import { Popover } from "antd";
import InFoNewUser from "../../pages/newUser/InFoNewUser";
import InForNewUser from "../../pages/user/InforNewUser";
import { useGetNewUser } from "../../hooks/Queries/User/useGetNewUser";
export default function WidgetSm() {
  const { isLoading, data } = useGetNewUser();

  if (isLoading) {
    return <div>...loading</div>;
  }
  const users = data;
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {!users.isAdmin &&
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <Popover
                placement="topLeft"
                // title={text}
                content=<InForNewUser user={user} />
                trigger="click"
              >
                <button className="widgetSmButton">Display</button>
              </Popover>
            </li>
          ))}
      </ul>
    </div>
  );
}
