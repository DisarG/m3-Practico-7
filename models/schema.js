const { Schema, model } = require('mongoose');

const Estudiantes = new Schema ({
    name: String,
    age: Number,
    grade: Number,
    group: String,
    subjects: [String],
    orientation: String || null
},{versionKey: false});

module.exports = model('Estudiante', Estudiantes); 