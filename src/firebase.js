// initialize firebase
import { initializeApp } from 'firebase/app';

import { ref, getDownloadURL, getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnEtu9F2cBZVsbcDr0EAGZ9mCLHJgBPtY",
    authDomain: "my-website-ec888.firebaseapp.com",
    projectId: "my-website-ec888",
    storageBucket: "my-website-ec888.appspot.com",
    messagingSenderId: "821001472059",
    appId: "1:821001472059:web:60235250a7d0984efd741e"
};

const app = initializeApp(firebaseConfig);


// initialize storage

const storage = getStorage(app);

const filename = "Grant Conklin Resume 2023.pdf";
// Get a reference to the file you want to download
const fileRef = ref(storage, filename);
// get url

// Download the file
const downloadFile = () => {
    getDownloadURL(fileRef).then((url) => {
        // Extract the file name from the URL
        const fileName = url.substring(url.lastIndexOf('/') + 1);

        // Create an `a` tag with the download URL and file name
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.setAttribute('download', fileName);

        // Add the `a` tag to the document and simulate a click event to download the file
        document.body.appendChild(downloadLink);
        // open in new tab
        downloadLink.target = "_blank";
        downloadLink.click();
    });
}



export { downloadFile };
