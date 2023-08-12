// const { create } = require("../controllers/skills");

const skills = [
    {id: 125223, skill: 'Feed Dogs', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Array Methods', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update: updateOne

  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
 }

 function updateOne(id, data){
  console.log(id, data)
  let index = skills.findIndex(t=>t.id == id)
  
  console.log("current todo index", index)
 
  const updateData = {...data }
  updateData.done = data.done ? true : false
  let updatedSkill = {...skills[index], ...updateData} 
  // 1. ...todo -> take keys in todo and add them as properties into the new object
  // 2. ...data -> take keys in data object (req.body), overwriting any properties with the current state of our data 
  skills.splice(index, 1, updatedSkill)
}


 