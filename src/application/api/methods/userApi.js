import Firebase from 'firebase';

const auth = Firebase.auth();

const registerNewUser = async (email, password) => {
    await auth.setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = async (email, password) => {
    await auth.setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return auth.signInWithEmailAndPassword(email, password);
};

export { registerNewUser, loginUser };
