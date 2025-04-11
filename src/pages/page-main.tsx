import BlockHeader from "../components/main/block-header.tsx";
import BlockUpload from "../components/main/block-upload.tsx";
import BlockReestr from "../components/main/block-reestr.tsx";

const PageMain = () => {
    return (
        <div className={"w-screen"}>
            <BlockHeader/>
            <div className={"w-[1100px] mt-6 flex flex-col items-center gap-6 m-auto"}>
                <BlockReestr/>
                <BlockUpload/>
            </div>
        </div>
    );
};

export default PageMain;