import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string)

    const getUser = (token: string) => {
        api.get('/user/get-user', { headers: { Authorization: token } }).then(({ data }) => {
            setUser(data.user)
            setLogin(true);
        }).catch((error) => {
            console.log('Usuario não autenticado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            setLogin(true);
            // Pegar o token e salvar no local storage
            localStorage.setItem('token', data.token);
            //seta o token
            setToken(data.token)
            //Chamar a requisição que pega os dados do usuario
            getUser(data.token);

        }).catch((error) => {
            console.log('Não foi possivel realizar o login');
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}

