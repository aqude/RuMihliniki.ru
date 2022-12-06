import {Route, Routes} from "react-router-dom";
import PostForms from "./PostCreatePage/PostForms";
import MainPreviewPage from "./MainPreviewPage/MainPreviewPage";
import React from "react";

function RoutesPage() {
    return (
        <Routes>
            <Route path="/forms" element={<PostForms/>} />
            <Route path="/Preview" element={<MainPreviewPage/>} />
        </Routes>
    );
}

export default RoutesPage;