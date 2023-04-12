let success = true;

function getUsers() {
  return new Promise((x, y) => {
    setTimeout(() => {
      if (success) {
        x([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        y('Failed to the user list');
      }
    }, 1000);
  });
}
const render = () => {
    console.log("Finallly we complete the task");
  };
const promise = getUsers();
promise.then(
    (users)=>{console.log(users);}
    ).catch(
    (error)=>{console.log(error);}
    ).finally(
        render()
    );

    
