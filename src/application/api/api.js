import Firebase from 'firebase';

const getCollection = async (collectionName) => {
    const { docs } = await Firebase.firestore().collection(collectionName).get();
    return docs.map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getDocument = async (collectionName, docID) => {
    const doc = await Firebase.firestore().collection(collectionName).doc(docID).get();
    return doc.data();
};

export { getCollection, getDocument };
