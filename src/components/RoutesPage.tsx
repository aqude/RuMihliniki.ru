import {Route, Routes} from "react-router-dom";
import PostForms from "./PostCreatePage/PostForms";
import MainPreviewPage from "./MainPreviewPage/MainPreviewPage";
import React from "react";
import SettingsPage from "./SettingsPasge/SettingsPage";

function RoutesPage() {
    return (
        <Routes>
            <Route path="/forms" element={<PostForms/>} />
            <Route path="/Preview" element={<MainPreviewPage/>} />
            <Route path="/Settings" element={<SettingsPage/>} />
        </Routes>
    );
}

export default RoutesPage;