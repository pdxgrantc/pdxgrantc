import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";

export default function Code() {
    return (
        <>
            <Helmet>
                <title>Code</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <Footer />
            </div>
        </>
    );
}
