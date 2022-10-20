import { getApps, initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhuGe-uPpbBtzXoLpsjz6VeK6SKsxwFj8",
    authDomain: "linkshort-33f90.firebaseapp.com",
    projectId: "linkshort-33f90",
    storageBucket: "linkshort-33f90.appspot.com",
    messagingSenderId: "930403569292",
    appId: "1:930403569292:web:8a944c4be427589acb75a9",
    measurementId: "G-1CXPLSST8L"
  };

  const Myfirebase = () => {
    if (!getApps().length){
        
        const app = initializeApp(firebaseConfig);
        // const auth = getAuth(app);
        // const analytics = getAnalytics(app);
        // const performance = getPerformance(app);
    }
    else{
        console.log('aleady initalized')
    }
  }

  export default Myfirebase;