const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    completedDates: [Date]
}, { timestamps: true });

module.exports = mongoose.model("Habit", HabitSchema);