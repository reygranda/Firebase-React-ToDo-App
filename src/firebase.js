import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClwtVKSrwoL1eETSaizL9ZeFxqLZKM22E',
  authDomain: 'to-do-app-ecd41.firebaseapp.com',
  projectId: 'to-do-app-ecd41',
  storageBucket: 'to-do-app-ecd41.appspot.com',
  messagingSenderId: '781254621077',
  appId: '1:781254621077:web:042d00aac05e0fce1b289c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
