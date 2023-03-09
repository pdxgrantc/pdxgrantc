// initialize firebase
import { initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';

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


export { storage };
