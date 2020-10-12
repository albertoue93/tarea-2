import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import './App.css';

const App = () => {
  const [users, setUsers] = useState(userList);

  /**Método que guarda el usuario recibiendolo del formulario */
  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };
  /**Método que elimina el usuario */
  const deleteUser = (id) => {
	  if(window.confirm('¿Desea eliminarlo?')){
		  setUsers(users.filter((user) => user.id !== id));
	  }
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, ced: "", name: "", lastname: "", email: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);


  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  /**Método que edita el usuario recibiendolo del formulario */
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <h2>CRUD USUARIOS | Tarea 2 Fundamentos Web</h2>
      <hr></hr>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Editar Usuario</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Agregar Usuario</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>Lista de Usuarios</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
