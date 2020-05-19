import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyDH7EIWo8fJkNqPmJH2PxW7rn5MALcRfGU",
	authDomain: "crwn-db-f6dff.firebaseapp.com",
	databaseURL: "https://crwn-db-f6dff.firebaseio.com",
	projectId: "crwn-db-f6dff",
	storageBucket: "crwn-db-f6dff.appspot.com",
	messagingSenderId: "326207475670",
	appId: "1:326207475670:web:4f9ec0e0f7ab00d6da9e77",
	measurementId: "G-TYWGMB5DT0"
};

firebase.initializeApp(config);
// Update the language code on the Auth instance before starting the OAuth flow
firebase.auth().useDeviceLanguage();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create google auth provider
const provider = new firebase.auth.GoogleAuthProvider();
// Specify additional custom OAuth provider parameters that you want to send with the OAuth request.
provider.setCustomParameters({
	'prompt': 'select_account'
});
// Export google sign-in with the provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;