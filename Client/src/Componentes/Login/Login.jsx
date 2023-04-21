import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import validarLogin from '../../assets/Validador/Validador';
import { TextField } from '@mui/material';


function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessages, setErrorMessages] = useState([]);
    const [loginErrorMessages, setLoginErrorMessages] = useState([]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validarLogin(username, password);
        if (errors.length > 0) {
            setLoginErrorMessages(errors)
        } else {

        }

        // Aquí podrías llamar a una acción de Redux para enviar los datos al servidor
        // y manejar la respuesta del servidor en el estado global de Redux.
    };

    return (
        <Container>
            <Box
                component={'form'}
                onSubmit={handleSubmit}
                noValidate
                autoComplete='off'
            >
                <TextField
                    id="username"
                    value={username}
                    label="Nombre de usuario"
                    variant="outlined"
                    onChange={handleUsernameChange}
                />

                {/* <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div> */}
                <TextField
                    id="password"
                    value={password}
                    label="Contraseña"
                    variant="outlined"
                    onChange={handlePasswordChange}
                />
                {/* <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div> */}
                <button type="submit">Iniciar sesión</button>
                <button type="button" onClick={() => props.onSwitchForm('register')}>Registrarse</button>
                {loginErrorMessages.length > 0 && (
                    <div>
                        <ul>
                            {loginErrorMessages.map(e => {
                                <li key={e}>{e}</li>
                            })}
                        </ul>
                    </div>)}

            </Box>
        </Container>
    );
}

export default LoginForm;
