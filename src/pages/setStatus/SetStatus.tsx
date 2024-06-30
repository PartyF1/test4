import { useSetStatusMutation } from "../../api/api";
import { replaceMiddleCharacters } from "../../utils/utils";
import style from "./setStatus.module.css"

interface ISetStatus {
    token: string;
}

export function SetStatus({token}: ISetStatus) {
    const [setStatus, {data: result}] = useSetStatusMutation();

    const handleSetStatus = () => {
        setStatus({
            token: token,
            status: "increased"
        })
    }
    return (
        <div className={style.setStatusBlock}>
            <h3>Установить статус</h3>
            <span>Отправляемый токен: </span>
            <textarea value={replaceMiddleCharacters(token, 3, 3)} disabled/>
            <button onClick={handleSetStatus}>Отправить статус</button>
            <span>Результат запроса: </span>
            <textarea value={result}/>
        </div>
    )
}