const express = require("express");
const {
    createHabit,
    getHabits,
    markCompleted
} = require("../controllers/habitController");

const router = express.Router();

router.post("/", createHabit);
router.get("/", getHabits);
router.put("/:id", markCompleted);

module.exports = router;