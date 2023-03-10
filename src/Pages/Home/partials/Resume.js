import React from 'react'
import { Helmet } from 'react-helmet';

// Firebase
import { downloadFile } from '../../../firebase';

// Partials
import Spacers from '../../../Static/partials/Spacers';

export default function Resume() {
    return (
        <>
            <div className="bg-black m-auto">
                <Spacers choice={"item_header"} />
                <div className="w-[90%] m-auto">
                    <div>
                        <h3 className="text-text_grey text-[2.2rem] on_mobile:pb-4">Work Experience</h3>
                        <h4 className="py-[1.25vh] text-6xl text-text_blue">Past Employment</h4>
                        <div className="grid grid-cols-2 on_mobile:flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                            <div className="text-[2.75rem]">
                                <div className="on_mobile:pb-3">
                                    <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">Student Technology Consultant</h5>
                                    <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">Oregon State University College of Forestry</h6>
                                </div>
                                <p className="text-[1.2rem] leading-8 on_mobile:leading-[1.4rem]">Individual user computer support setup and software assistance; using systems such as MECM and PXE to make the process of Windows system setup as easy and streamlined as possible.</p>
                            </div>
                            <div className="text-[2.75rem]">
                                <div className="on_mobile:pb-3">
                                    <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">University Presentation Support</h5>
                                    <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">Oregon State University Information Technology</h6>
                                </div>
                                <p className="text-[1.2rem] leading-8 on_mobile:leading-[1.4rem]">Create and maintain classroom computer systems to make complex AV solutions easy to use for professors and presenters across campus. Crestron was the major system used to make these goals a reality.</p>
                            </div>
                        </div>
                        <Spacers choice={"item_break"} />
                        <h4 className="py-[1.25vh] text-6xl text-text_pink">Volunteering Experiences</h4>
                        <div className="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                            <div className="text-[2.75rem]">
                                <div className="on_mobile:pb-3">
                                    <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">Free Geek Portland</h5>
                                    <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">Electronics Recycling</h6>
                                </div>
                                <p className="text-[1.2rem] on_mobile:leading-[1.4rem]">Taking apart and sorting by material type computer compnents to avoid e-waste.</p>
                            </div>
                        </div>
                    </div>
                    <Spacers choice={"item_footer"} />
                    <div className="w-full">
                        <button
                            onClick={downloadFile}
                            className="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">
                            Resume Download
                        </button>
                    </div>
                    <Spacers choice={"item_footer"} />
                </div>
            </div>
        </>
    )
}
