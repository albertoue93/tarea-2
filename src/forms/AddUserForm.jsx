import React, {useState} from 'react';

const AddUserForm = (props) => {

    const initUser = {id: null, ced: '', name: '', lastname: '', email: ''};
	
	const [error, setError] = useState(false);
	
	const [message, setMessage] = useState(false);

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
	/**Guarda el usuario enviandolo al metodo principal*/
    const handleSubmit = e => {
		e.preventDefault();
		/**Verifica que los campos no esten vacíos */
		if (user.ced && user.name && user.lastname && user.email ) {
            handleChange(e, props.addUser(user));
			setMessage(true);
			setError(false);
			setUser(initUser);
        }else{
			console.log("hola");
			setError(true);
			return;
		}
	}
	/**Alerta de campos vacíos */
	let component
	if(error === true){
		component = <div  className="alert alert-danger">Campos Vacios</div>
		const timeout = setTimeout(() => {
      setError(1);
    }, 3000);
	}else{
		component = null;
	}
	/**Alerta de Usuario Guardado */
	let messageText
	if(message === true){
		messageText = <div className="alert alert-success">Usuario Guardado</div>
		const timeout = setTimeout(() => {
      setMessage(1);
    }, 3000);		
	}else{
		messageText = null;
	}

    return (
        <form className="myForm">
		{component}{messageText}
		<label>Cédula</label>
            <input className="u-full-width" type="text" value={user.ced} name="ced" onChange={handleChange} />
			
            <label>Nombre</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
			
			<label>Apellidos</label>
            <input className="u-full-width" type="text" value={user.lastname} name="lastname" onChange={handleChange} />
			
            <label>Email</label>
            <input className="u-full-width" type="email" value={user.email} name="email" onChange={handleChange} />
			
            <button className="myButton" type="submit" onClick={handleSubmit} >Agregar Usuario</button>
        </form>
    )
}

export default AddUserForm;