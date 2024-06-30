import { useLazyGetRolesQuery } from '../../api/api';
import style from './rolesList.module.css';

export interface IRolesList {
    choosenRole?: string;
    setRole?: (role: string) => void;
}

export function RolesList({ choosenRole, setRole }: IRolesList) {
    const [getRoles, { data: roles }] = useLazyGetRolesQuery();

    const handleGetRoles = () => {
        getRoles(undefined);
    }

    const handleSetRole = (role: string) => {
        setRole!(role);
    }

    return (
        <>
            <div className={style.roles}>
                <button onClick={handleGetRoles}>Получить роли</button>
                {roles ?
                    <>
                        <h3>Выберите подходящую роль из списка</h3>
                        {roles?.roles?.map((role, index) => (
                            <span key={index} className={`${style.role} ${role === choosenRole ? style.active : ''}`} onClick={() => handleSetRole(role)}>{role}</span>
                        )
                        )}
                    </> :
                    <></>}
            </div>
        </>
    )
}