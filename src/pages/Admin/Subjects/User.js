import React, { useState, useEffect } from "react";
import "./User.scss";
import { getActiveUsers } from "../../../api/user";
import { getAccessToken } from "../../../api/auth";
import ListUsers from "../../../components/MenuComponents/Users/ListUsers/ListUsers";

export default function Users() {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false);
  const token = getAccessToken();

  useEffect(() => {
    getActiveUsers(token, true).then((response) => {
      setUsersActive(response.users);
    });
    getActiveUsers(token, false).then((response) => {
      setUsersInactive(response.users);
    });
    setReloadUsers(false);
  }, [token, reloadUsers]);

  return (
    <div>
      <ListUsers
        usersActive={usersActive}
        usersInactive={usersInactive}
        setReloadUsers={setReloadUsers}
      />
    </div>
  );
}