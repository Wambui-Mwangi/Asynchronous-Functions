// Write an asynchronous function that accepts a message string and a delay time 
// in milliseconds. The function should log the message to the console after the 
// specified delay time.

const message = async(message,delay) =>{
    await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
message('Good morning, today is a good day', 6000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise 
// with user data when given a user ID. Write an asynchronous function that fetches and logs 
// the data for each user ID one by one, in sequence.
let userIds = [2,4,6,8];
const getUserdata = async ()=>{
    for (id of userIds) {
        
      }

}

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves 
// if the task is successful and rejects if there's an error. Write a function that calls performTask()
// and logs a custom success message if the task is successful, and a custom error message if there's an error.

const performTask = async () => {
    const successful = true;
    return new Promise((resolve, reject) => {
      if (successful) {
        resolve('Success!');
      } else {
        reject('Try again');
      }
    });
  };
  
  const results = async () => {
    try {
      const result = await performTask();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  results();
  



