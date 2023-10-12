const router = require('express').Router();
const { Post } = require('../../models');

// routes for api/posts/

router.post('/', async (req, res) => {
    const postData = await Post.findByPk(req.body);


});


router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;