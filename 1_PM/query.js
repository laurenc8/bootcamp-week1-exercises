const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.

const usersByPet = pet => {
  return database.users.filter(user => user.favPet === pet)
}
console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  const colId = database.users.filter(userObj => userObj.firstName === user)[0].collegeId
  const col = database.college.filter(colObj => colObj.id === colId)[0]
  return [col.name, col.color]
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const getFavPet = userId => {
  return database.users.filter(user => user.id === userId)[0].favPet
}
const oppositesAttract = database.friends.filter(friend => getFavPet(friend.id1) !== getFavPet(friend.id2))
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = database.users.filter(user => user.state === database.college.filter(col => col.id === user.collegeId)[0].state)
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
const getCollegeId = userId => {
  return database.users.filter(user => user.id === userId)[0].collegeId
}
const collegeFriends = database.friends.filter(friend => getCollegeId(friend.id1) === getCollegeId(friend.id2))
console.log(collegeFriends)