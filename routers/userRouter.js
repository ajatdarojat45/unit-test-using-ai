const router = require("express").Router();
const UserConroller = require("../controllers/userController");

router.get("/", UserConroller.findAll);
router.post("/", UserConroller.create);
router.get("/:id", UserConroller.findId);
router.put("/:id", UserConroller.update);
router.delete("/:id", UserConroller.delete);

module.exports = router;
