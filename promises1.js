function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
    console.log('Call to getuser function');
  }
  
  function findUser(username, callback) {
    getUsers((users)=>{
        const user = users.find((user) => user.username === username);
        callback(user);
    });
    
  }
  
  findUser('john', console.log);