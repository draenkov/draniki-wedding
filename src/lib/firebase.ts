import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBhPmMTuKHCv3EV-SUO6sdKHgj0rSZCIKM',
    authDomain: 'wedding-invitation-4f0ab.firebaseapp.com',
    projectId: 'wedding-invitation-4f0ab',
    storageBucket: 'wedding-invitation-4f0ab.firebasestorage.app',
    messagingSenderId: '807098626905',
    appId: '1:807098626905:web:0a42368d531556cf725248',
    databaseURL: 'https://wedding-invitation-4f0ab-default-rtdb.europe-west1.firebasedatabase.app',
};

export const app = initializeApp(firebaseConfig);
