import { useRef } from "react";
import style from './signUp.module.css'
import { useSignUpMutation } from "../../api/api";

interface ISignUp {
    role: string,
    setEmail: (email: string) => void;
}

export function SignUp({role, setEmail}: ISignUp) {
    const [signUp, {data: result}] = useSignUpMutation();
    const emailRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);


    async function handleSignUp() {
        if (lastNameRef.current?.value && firstNameRef.current?.value && emailRef.current?.value && role) {
            try {
                const result = await signUp({
                    last_name: lastNameRef.current.value,
                    first_name: firstNameRef.current.value,
                    email: emailRef.current.value,
                    role: role
                }).unwrap()
                if (result === "Данные внесены") {
                    setEmail(emailRef.current.value)
                }
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    return (
        <div className={style.signUpBlock}>
            <h3>Введите ваши данные</h3>
            <div>
                <label>Введите ваше имя: </label>
                <input ref={firstNameRef}/>
            </div>
            <div>
                <label>Введите вашу фамилию: </label>
                <input ref={lastNameRef}/>
            </div>
            <div>
                <label>Введите ваш email: </label>
                <input ref={emailRef}/>
            </div>
            <div>
                <label>Выбранная специализация: </label>
                <input value={role} disabled></input>
            </div>
            <button onClick={handleSignUp}>Отправить данные</button>
            <span>Результат запроса:</span>
            <textarea value={result} disabled></textarea>
        </div>
    )
}