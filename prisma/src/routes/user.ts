const express = require('express');
const router = express.Router();
import userControlers from '../controllers/user'

router.get('/', userControlers.allUsers);
router.get('/:id');
router.put('/:id');
router.delete('/:id');
router.post('/', userControlers.postUsers);

export = router;