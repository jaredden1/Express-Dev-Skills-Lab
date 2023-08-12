// controllers/skills.js
const Skill = require('../models/skill');

module.exports = {
   index,
   show,
   new: newSkill,
   create,
   delete: deleteSkill,
   edit,
   update,
}

function deleteSkill(req, res) {
   Skill.deleteOne(req.params.id);
   res.redirect('/skills');
}

function create(req, res) {
   console.log(req.body);
   Skill.create(req.body);
   res.redirect('/skills');
}

function newSkill(req, res) {
   res.render('skills/new', {title: 'New Skill'});
}

function show(req, res) {
    res.render('skills/show', {
       skill: Skill.getOne(req.params.id),
       title: 'Skills Details'
    });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All My Skills'
    });
  }

function edit(req, res) {
   const id = req.params.id;
   res.render("skills/edit", { title: "Skill Edit", skill: Skill.getOne(id) });
 }

 function update(req, res) {
   const id = Number(req.params.id)
   req.body.id = id // req.body can be modified after it reaches the controller
   console.log(req.body, 'data passed to update')
   Skill.update(id, req.body)
   res.redirect(`/skills/${id}`) // template - literal 
 }
  
