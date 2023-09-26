/*
Promises is another way to create asynchronus code in javascript
Promises is way to execute the code of asynchronus function as soon as possible rather put at the end of callstack.

 */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Before");
  }, 1000);
  // reject(new Error("Error: Can't resolve"));
});

promise.then(
  (result) => {
    console.log(result);
    func();
  },
  (error) => {
    console.log(error);
  }
);

const func = () => {
  console.log("After");
};
// func()
