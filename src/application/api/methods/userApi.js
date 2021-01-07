import Firebase from 'firebase';

const registerNewUser = async () => {
    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return Firebase.auth().signInAnonymously();
};

// TODO link account!

// const loginUser = async (email, password) => {
//     await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
//     return Firebase.auth().signInWithEmailAndPassword(email, password);
// };

export { registerNewUser };
