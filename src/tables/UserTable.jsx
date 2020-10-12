import React from 'react';

const UserTable = (props) => {
    return (
        <table className="minimalistBlack">
            <thead>
                <tr>
					<th>Cédula</th>
                    <th>Nombre</th>
					<th>Apellidos</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, ced, name, lastname, email} = user;
                        return (
                            <tr key={id}>
								<td>{ced}</td>
                                <td>{name}</td>
                                <td>{lastname}</td>
                                <td>{email}</td>
                                <td>
								    <button className="myButtonEd" onClick={() => props.editUser(id, user)}>Editar</button>
                                    <button className="myButtonEl" onClick={() => props.deleteUser(id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={5}>No hay usuarios Registrados</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;