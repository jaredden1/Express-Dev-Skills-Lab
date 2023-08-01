const skills = [
    {id: 125223, skill: 'Feed Dogs', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 