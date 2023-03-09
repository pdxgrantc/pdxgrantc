import React from 'react'
import { Link } from "react-router-dom";

// Firebase
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase';

// Partials
import Spacers from '../../../Static/partials/Spacers';

export default function Resume() {

    // download resume
    const storageRef = ref(storage, 'Grant Conklin Resume 2023.pdf');
    getDownloadURL(storageRef).then((url) => {
        console.log(url);
    }).catch((error) => {
        console.log(error);
    });
    

    return (
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
                    <Link to="/files/Grant-Resume.pdf" target="_blank" className="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" download>Resume Download</Link>
                </div>
                <Spacers choice={"item_footer"} />
            </div>
        </div>
    )
}
