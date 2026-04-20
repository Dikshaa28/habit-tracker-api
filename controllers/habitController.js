const Habit = require("../models/Habit");

// Create Habit
exports.createHabit = async (req, res) => {
    const { title, userId } = req.body;

    const habit = await Habit.create({
        title,
        userId,
        completedDates: []
    });

    res.json(habit);
};

// Get all habits
exports.getHabits = async (req, res) => {
    const habits = await Habit.find();
    res.json(habits);
};

// Mark habit as completed
exports.markCompleted = async (req, res) => {
    const { id } = req.params;

    const habit = await Habit.findById(id);
    habit.completedDates.push(new Date());

    await habit.save();
    res.json(habit);
};