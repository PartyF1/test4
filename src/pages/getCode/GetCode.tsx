import { useState } from "react";
import { useLazyGetCodeQuery } from "../../api/api";
import { convert, replaceMiddleCharacters } from "../../utils/utils";
import style from "./getCode.module.css"

interface IGetCode {
    email: string;
    setToken: (token: string) => void;
}

export function GetCode({ email, setToken }: IGetCode) {
    const [getCode, { data: code }] = useLazyGetCodeQuery();
    const [currentToken, setCurrentToken] = useState('');

    async function handleGetCode() {
        try {
            const result = await getCode(email).unwrap();
            const token = convert(email, result);
            setCurrentToken(token);
            setToken(token);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className={style.getCodeBlock}>
                <h3>Получение кода</h3>
                <div>
                    <label>EMail: </label>
                    <input value={email} disabled />
                </div>
                <button onClick={handleGetCode}>Получить код</button>
                {code ?
                    <>
                        <div>
                            <span>Полученный код: </span>
                            <textarea value={replaceMiddleCharacters(code, 3, 3)} disabled />
                        </div>
                        <div>
                            <span>Токен:</span>
                            <textarea value={replaceMiddleCharacters(currentToken, 3, 3)} disabled />
                        </div>
                    </> :
                    <></>}
            </div>
        </>
    )
}