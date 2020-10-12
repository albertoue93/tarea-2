import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }
    /**Edita el usuario enviandolo al metodo principal*/
    const handleSubmit = e => {
        e.preventDefault();
        if (user.ced && user.name && user.lastname && user.email){
			props.updateUser(user);
		}
	}
	
    return (
        <form className="myForm">
            <label>Cédula</label>
            <input className="u-full-width" type="text" value={user.ced} name="ced" onChange={handleChange} />
			
			<label>Nombre</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
			
            <label>Apellidos</label>
            <input className="u-full-width" type="text" value={user.lastname} name="lastname" onChange={handleChange} />
			
			<label>Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} />
			
            <button className="myButtonE" type="submit" onClick={handleSubmit} >Editar Usuario</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancelar</button>
        </form>
    )
}

export default EditUserForm;