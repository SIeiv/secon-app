import BaseAuth from "../components/common/base-auth.tsx";
import {Button, Input} from "antd";
import {useNavigate} from "react-router";
import {FC} from "react";
import {IRouterAuth} from "../routers/router-auth.tsx";
import ButtonAuth from "../components/auth/button-auth.tsx";



const PageLogin: FC<IRouterAuth> = ({sourceDir}) => {
    const navigate = useNavigate();

    const toRegisterHandleClick = () => {
        navigate(`${sourceDir}/register`);
    }

    const registerHandleClick = () => {
        navigate(`/`);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center">
            <BaseAuth title={"ВХОД"}>
                <div className="flex flex-col gap-[36px] py-[30px]">
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Введите имя пользователя или email" />
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Введите пароль" />
                </div>
                <div className={"flex flex-col items-center gap-6"}>
                    <Button className={"w-full"} size={"large"} onClick={registerHandleClick}>Войти</Button>
                    {/*<ButtonAuth title={"Войти"}/>*/}
                    <div>
                        <div className="text-[#9197f2]">
                            <span>Нет Аккаунта? </span>
                            <span onClick={toRegisterHandleClick} className={"font-semibold hover:underline cursor-pointer"}>Регистрация</span>
                        </div>
                    </div>
                </div>
            </BaseAuth>
        </div>
    );
};

export default PageLogin;