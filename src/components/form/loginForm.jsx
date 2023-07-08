import { useState } from "react";
import style from "./loginForm.module.css"

export default function LoginForm () {

     const [user, setUser] = useState({
        email:"",
        password:"",
     });
// Creo un estado y su modif con use State. le doy valores email y pass

     function handleChange (e){
        setUser({
            ...user,
            [e.target.value]:e.target.value, // igualo al valor y asigno abajo en cada input // tambien aclaro que valor voy a crear y con que input voy a igualar
        });
     }
     // en esta func voy a recibir un evento y guardo lo que tenia con spreed oper y por medio de ECMA6 lo que uso es transformacion dinamica para guardar eso dependeindo donde estoy. 

return (

    <div className={style.formContainer}>
        <div>
            <h1>FORMULARIO</h1>
        </div>

        <form>
            <div>
                <label>Usarname</label>
                <input type="text" placeholder="example@gmail.com" name="email" value={user.email} onChange={handleChange}/>   
            </div>
            
            <div>
                <label>password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange}/>
            </div>

            <div>
                <button type="submit">LOGIN</button>
            </div>
        </form>
    </div>
);
}


// Arranco el form, recordar encerrar bien dentro de cada contenedor y la parte de formulario en etiqueta Form 
// a us vez agregar los label e input con su repectivo type (que es) y placehold (algo escrito dentro)
// agrego los onChange y asigno cual funcion se ejecuta. toooodo esto fue para conectar los inputs al estado asi se va seteando 