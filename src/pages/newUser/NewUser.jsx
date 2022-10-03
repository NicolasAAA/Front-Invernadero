import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevos Usuarios</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre Usuario</label>
          <input type="text" placeholder="Hola2314" />
        </div>
        <div className="newUserItem">
          <label>Nombre completo</label>
          <input type="text" placeholder="Juanito Perez" />
        </div>
        <div className="newUserItem">
          <label>Correo Electronico</label>
          <input type="email" placeholder="Correo@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="newUserItem">
          <label>Contacto</label>
          <input type="text" placeholder="+569-31357987" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input type="text" placeholder="Antofagasta | Calama" />
        </div>
        <div className="newUserItem">
          <label>Sexo</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Hombre</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Mujer</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Otro</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Crear</button>
      </form>
    </div>
  );
}
