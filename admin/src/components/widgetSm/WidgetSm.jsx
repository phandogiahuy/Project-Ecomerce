import { AxiosInstance } from "../../service-api/requestMethods";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import { Popover } from "antd";
import InFoNewUser from "../../pages/newUser/InFoNewUser";
import InForNewUser from "../../pages/user/InforNewUser";
export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await AxiosInstance.get("user/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  console.log(users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
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
