import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDFgtoG2iLt5Oea4wMImi9S7PZ80uZW8w4',
	authDomain: 'movix-771c5.firebaseapp.com',
	projectId: 'movix-771c5',
	storageBucket: 'movix-771c5.appspot.com',
	messagingSenderId: '927152640994',
	appId: '1:927152640994:web:8402b8103c688183215fbb',
	measurementId: 'G-8MR9HLWGFK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
