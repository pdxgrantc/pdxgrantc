import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";

export default function Application() {
    return (
        <>
            <Helmet>
                <title>{ /* add dynamic title */}</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div class="h-[6vh]"></div>
                <Footer />
            </div>
        </>
    )
}
