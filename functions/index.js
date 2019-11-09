const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();


exports.createUser = functions.auth.user().onCreate((userRecord) => {
    const { email, displayName, uid} = userRecord;

    return db.collection('users').doc(uid).set({
        email,
        displayName,
    });
});