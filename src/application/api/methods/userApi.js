import Firebase from 'firebase';

const registerNewUser = async (email, password) => {
    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return Firebase.auth().createUserWithEmailAndPassword(email, password);
};

const loginUser = async (email, password) => {
    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return Firebase.auth().signInWithEmailAndPassword(email, password);
};

export { registerNewUser, loginUser };
