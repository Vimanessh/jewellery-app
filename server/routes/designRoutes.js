const express = require('express');
const router = express.Router();
const {
  createDesign,
  getDesigns,
  getDesignById,
  updateDesignStatus,
  deleteDesign,
  sendDesignEmail
} = require('../controllers/designController');

router.route('/')
  .post(createDesign)
  .get(getDesigns);

router.post('/send-email', sendDesignEmail);

router.route('/:id')
  .get(getDesignById)
  .put(updateDesignStatus)
  .delete(deleteDesign);

module.exports = router;
