import {FC, useEffect, useState} from "react";
import ButtonUpload from "./button-upload.tsx";

interface IUploader {
    title: string;
}

const ElementUploader: FC<IUploader> = ({title}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [images, setImages] = useState<string[]>([]);

    const imgEls = images.map(image =>
        <img className={"w-[100px] h-[100px]"} src={image} alt=""/>
    )

    const handleFilesUploadChange = (event) => {

        let out: File[] = [];
        for (let i = 0; i < event.target.files.length; i++) {
            out.push(event.target.files[i]);
        }
        setUploadedFiles([...uploadedFiles, ...out]);

        console.log(event.target.files);
        event.target.files[0] = null;
    }

    useEffect(() => {
        let outImages: string[] = [];
        for (let j = 0; j < uploadedFiles.length; j++) {
            outImages.push(URL.createObjectURL(uploadedFiles[j]));
        }
        setImages([...outImages])
    }, [uploadedFiles])

    console.log(images);
    console.log(uploadedFiles);

    return (
        <div className={"w-full"}>
            <div className={"text-white text-[20px] pb-2"}>{title}</div>
            <div className={"flex gap-2 flex-wrap min-h-[100px]"}>
                {imgEls}
                <ButtonUpload onChange={handleFilesUploadChange}/>
            </div>
        </div>
    );
};

export default ElementUploader;