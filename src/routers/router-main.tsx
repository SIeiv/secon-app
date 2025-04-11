import {FC} from "react";
import {IRouter} from "./router-auth.tsx";
import {Route, Routes} from "react-router";
import PageMain from "../pages/page-main.tsx";


const RouterMain: FC<IRouter> = ({sourceDir}) => {
    return (
        <div>
            <Routes>
                <Route path={`${sourceDir}`} element={<PageMain/>} />
            </Routes>
        </div>
    );
};

export default RouterMain;