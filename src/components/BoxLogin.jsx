import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertAuth } from "../store/features/auth.slice";
import { CButton } from "./shared/CButton";
import { CInput } from "./shared/CInput";

export function BoxLogin(params) {

    const [email, setEnails] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleButton = () => {
        dispatch(insertAuth({
            email:email,
            password:password
        }))
        navigate('/home')
    }

    return(
        <div className="flex items-center w-[50%] h-[635px]">
            <form method="submit" className="w-[100%] h-[350px] flex flex-col items-center justify-center">
                <CInput  type="text" placeholder="Usuário" label='Usuario' value={email} onChange={(e=>setEnails(e.target.value))}/>
                <CInput  type="password" placeholder="Senha" label='Senha' value={password} onChange={(e=>setPassword(e.target.value))}/>
                <CButton label="Entrar" onClick={handleButton}/>
            </form>
        </div>
    )
}
