import {Button, Input} from "antd";
import BaseAuth from "../components/common/base-auth.tsx";
import {useNavigate} from "react-router";
import {FC} from "react";
import {IRouterAuth} from "../routers/router-auth.tsx";

const PageRegister: FC<IRouterAuth> = ({sourceDir}) => {
    const navigate = useNavigate();

    const toLoginHandleClick = () => {
        navigate(`${sourceDir}/login`);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center">
            <BaseAuth title={"РЕГИСТРАЦИЯ"}>
                <div className="flex flex-col gap-[36px] py-[30px]">
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Имя пользователя" />
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Email" />
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Пароль" />
                    <Input className={"h-[48px] text-[24px]"} size={"large"} placeholder="Повторите пароль" />
                </div>
                <div className={"flex flex-col items-center gap-6"}>
                    <Button className={"w-full"} size={"large"}>Зарегистрироваться</Button>
                    <div>
                        <div className="text-[#9197f2]">
                            <span>Есть аккаунт? </span>
                            <span onClick={toLoginHandleClick} className={"font-semibold hover:underline cursor-pointer"}>Войти</span>
                        </div>
                    </div>
                </div>
            </BaseAuth>
        </div>
    );
};

export default PageRegister;