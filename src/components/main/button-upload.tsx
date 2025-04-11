import {PlusOutlined} from "@ant-design/icons";
import {FC, ReactElement, useEffect, useState} from "react";

interface IButtonUpload {
    size?: number;
    onChange?: (value: any) => void;
    onClick?: (value: any) => void;
    onSubmit?: (value: any) => void;
}

const ButtonUpload: FC<IButtonUpload> = ({onChange, onClick, onSubmit}) => {

    return (
        <div className={"w-[100px] h-[100px]"}>
            <div
                className={"text-[#9197f2] absolute flex flex-col border-2 justify-center rounded-md items-center cursor-pointer w-[100px] h-[100px] transition-all duration-200 hover:text-white"}>
                <PlusOutlined className={"text-[32px]"} size={64}/>
                <div className={"text-sm"}>Загрузить</div>
                <input multiple type={"file"}
                       className={"absolute w-[100px] h-[100px] cursor-pointer text-transparent"}
                       onChange={(e) => {
                           onChange(e);
                       }}
                       onClick={onClick}
                       onSubmit={onSubmit}
                >

                </input>
            </div>
            <div>

            </div>

        </div>

    );
};

export default ButtonUpload;