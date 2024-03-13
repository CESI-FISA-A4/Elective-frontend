import React, { useState, useEffect } from "react";
import UserAPI from "../apis/User";

export default function App() {
  const [users, setUsers] = useState({
    isLoading: true,
    data: []
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await UserAPI.getAll();
      const { data: users } = data;
      setUsers({
        isLoading: false,
        data: users
      });
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.isLoading ? (
        "Loading..."
      ) : (
        <ol>
          {users.data.map(user => (
            <li key={user.id}>
              {user.last_name} {user.first_name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
