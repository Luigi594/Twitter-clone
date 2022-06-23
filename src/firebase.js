import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_SENDER,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;