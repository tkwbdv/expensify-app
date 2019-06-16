import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_4_DQVVHcXD5MYtJm51bSsLNGRMQ2nB0",
  authDomain: "expensify-ab277.firebaseapp.com",
  databaseURL: "https://expensify-ab277.firebaseio.com",
  projectId: "expensify-ab277",
  storageBucket: "expensify-ab277.appspot.com",
  messagingSenderId: "153243559332",
  appId: "1:153243559332:web:7e830ea71f42030d"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// }, (error) => {
//   console.log("error: ", error);
// });

// database.ref("expenses").push({
//   description: "rent",
//   note: "june",
//   amount: 109500,
//   createdAt: 90802345157
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// const notes = [{
//   id: "12",
//   title: "first note",
//   body: "This is my note"
// }, {
//   id: "98sdf",
//   title: "another note",
//   body: "This is my second note"
// }];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// }, (error) => {
//   console.log("Error: ", error);
// });

// database.ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// database.ref().set({
//   name: "Thomas",
//   age: "26",
//   stressLevel: 6,
//   job: {
//     title: "software dev",
//     company: "google"
//   },
//   location: {
//     city: "Menden",
//     country: "Germany"
//   }
// }).then(() => {
//   console.log("Data is saved")
// }).catch((error) => {
//   console.log("error", error);
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// })
//   .then(() => {
//     console.log("Data was updated!");
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });

// database.ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(error => {
//     console.log(error);
//   });