import ElementUploader from "./element-uploader.tsx";
import BaseBlockMain from "../common/base-block-main.tsx";


const BlockUpload = () => {
    return (
        <BaseBlockMain>
            <div className={"w-1/2"}>
                <ElementUploader title={"Загрузить фотоотчеты старых счетчиков"}/>
            </div>
            <div className={"w-1/2"}>
                <ElementUploader title={"Загрузить фотоотчеты новых счетчиков"}/>
            </div>
        </BaseBlockMain>
    );
};

export default BlockUpload;