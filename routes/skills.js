var express = require('express'); 
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// GET skills edit listing
router.get('/:id/edit', skillsCtrl.edit)
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills
router.delete('/:id', skillsCtrl.delete);
// PUT skills updating resource
router.put('/:id', skillsCtrl.update);
/// PUT skills updating resource


module.exports = router;
