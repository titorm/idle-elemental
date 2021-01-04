import Firebase from 'firebase';

const getCollectionData = async (collectionName) => {
    const { docs } = await Firebase.firestore().collection(collectionName).get();
    return docs.map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getDocumentData = async (collectionName, docID) => {
    const doc = await Firebase.firestore().collection(collectionName).doc(docID).get();
    return doc.data();
};

const setDocumentData = async (collectionName, docID, data) => {
    const doc = await Firebase.firestore().collection(collectionName).doc(docID);
    return doc.set(data);
};

export { getCollectionData, getDocumentData, setDocumentData };
