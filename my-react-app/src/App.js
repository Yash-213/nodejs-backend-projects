import { useEffect, useState } from "react";
import UserForm from "./userForm";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users on load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const handleUserAdded = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <h2>User Manager</h2>

      <UserForm onUserAdded={handleUserAdded} />

      <ul>

        {users.map((user) => (
          <li key={user._id}>
            {user.name} — {user.email}
            {user.age && ` — Age: ${user.age}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
