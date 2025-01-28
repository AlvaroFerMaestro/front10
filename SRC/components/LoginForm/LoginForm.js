/* import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";

import "./LoginForm.css"

        export const LoginForm = (form) => {
            form.className = "login-form";
        
            
            form.innerHTML = `
                ${FieldForm({ labelText: "Nombre Usuario", type: "text", name: "username" })}
                ${FieldForm({ labelText: "Contraseña", type: "password", name: "password" })}
            `;
        
            
            const errorMessage = document.createElement("p");
            errorMessage.className = "error-message";
            errorMessage.style.color = "red"; 
            errorMessage.style.display = "none"; 

            
        
            form.append(errorMessage); 
        
            
            form.append(Button({ 
                text: "Login", 
                fnc: () => handleLogin(form, errorMessage)  
            }));
        };
        
        
         */

        import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";

import "./LoginForm.css";

export const LoginForm = (form) => {
    form.className = "login-form";

    // Crear campos de formulario
    form.innerHTML = `
        ${FieldForm({ labelText: "Nombre Usuario", type: "text", name: "username" })}
        ${FieldForm({ labelText: "Contraseña", type: "password", name: "password" })}
    `;

    // Crear mensaje de error
    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";

    form.append(errorMessage);

    // Crear botón con efecto de carga
    form.append(
        Button({
            text: "Login",
            fnc: () => handleLogin(form, errorMessage), // Maneja el login
        })
    );
};

// Función para manejar el login
const handleLogin = async (form, errorMessage) => {
    const username = form.querySelector('input[name="username"]').value;
    const password = form.querySelector('input[name="password"]').value;

    errorMessage.style.display = "none";

    // Simulación de llamada a un servidor (asíncrono)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula 2 segundos de carga

    if (username === "admin" && password === "1234") {
        alert("¡Login exitoso!");
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
        errorMessage.style.display = "block";
    }
};
