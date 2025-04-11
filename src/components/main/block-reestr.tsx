
import BaseBlockMain from "../common/base-block-main.tsx";
import {Button, Select} from "antd";
import {DownloadOutlined} from "@ant-design/icons";

const BlockReestr = () => {
    return (
        <BaseBlockMain>
            <div className={"flex flex-col gap-2"}>
                <div className={"text-white text-[20px]"}>Выбрать реестр</div>
                <div className={"flex gap-2"}>
                    <Select
                        defaultValue="reestr_1"
                        style={{width: 120}}
                        options={[
                            {value: 'reestr_1', label: 'reestr_1'},
                            {value: 'reestr_2', label: 'reestr_2'},
                            {value: 'reestr_3', label: 'reestr_3'},
                            {value: 'reestr_4', label: 'reestr_4', disabled: true},
                        ]}
                    />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} />
                </div>

            </div>
        </BaseBlockMain>
    );
};

export default BlockReestr;