// controllers/skills.js
const Skill = require('../models/skill');

module.exports = {
   index,
   show
};

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
