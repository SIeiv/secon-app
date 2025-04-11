import {FC, ReactNode} from "react";

interface IBaseAuth {
    title: string;
    children: ReactNode;
}

const BaseAuth: FC<IBaseAuth> = ({children, title}) => {
    return (
        <div className="w-[480px] mx-auto bg-[#181B50] p-6 rounded-md">
            <div className={"text-white text-[30px] flex w-full justify-center roboto"}>{title}</div>
            {children}
        </div>
    );
};

export default BaseAuth;