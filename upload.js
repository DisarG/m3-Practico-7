const mongoose = require('mongoose');
const Estudiante = require('./models/schema')

const db = [
    {
      name: 'Agustín',
      age: 18,
      grade: 6,
      group: 'B',
      subjects: [ 'Matemáticas', 'Literatura' ],
      orientation: 'Derecho'
    },
    {
      name: 'Leandro',
      age: 17,
      grade: 5,
      group: 'C',
      subjects: [ 'Historia', 'Geografía' ],   
      orientation: 'Humanístico'
    },
    {
      name: 'Lucas',
      age: 16,
      grade: 4,
      group: 'A',
      subjects: [ 'Inglés', 'Biología' ]
    },
    {
      name: 'José',
      age: 18,
      grade: 5,
      group: 'B',
      subjects: [ 'Matemáticas II', 'Física' ],
      orientation: 'Científico'
    },
    {
      name: 'Antonella',
      age: 16,
      grade: 4,
      group: 'B',
      subjects: [ 'Matemáticas', 'Geografía' ]
    },
    {
      name: 'Paula',
      age: 17,
      grade: 4,
      group: 'C',
      subjects: [ 'Dibujo', 'Inglés' ]
    },
    {
      name: 'Mónica',
      age: 15,
      grade: 5,
      group: 'B',
      subjects: [ 'Literatura', 'Geografía' ],
      orientation: 'Humanístico'
    },
    {
      name: 'Camila',
      age: 19,
      grade: 6,
      group: 'B',
      subjects: [ 'Matemáticas', 'Química' ],
      orientation: 'Ingeniería'
    },
    {
      name: 'Alma',
      age: 20,
      grade: 5,
      group: 'C',
      subjects: [ 'Música', 'Historia del Arte' ],
      orientation: 'Artístico'
    },
    {
      name: 'Mateo',
      age: 16,
      grade: 6,
      group: 'A',
      subjects: [ 'Biología', 'Química' ],
      orientation: 'Medicina'
    },
    {
      name: 'Bruno',
      age: 18,
      grade: 4,
      group: 'A',
      subjects: [ 'Ingles', 'Filosofía' ]
    },
    {
      name: 'Santiago',
      age: 22,
      grade: 6,
      group: 'C',
      subjects: [ 'Economía', 'Matemáticas' ],
      orientation: 'Economía'
    },
    {
      name: 'Kevin',
      age: 15,
      grade: 5,
      group: 'B',
      subjects: [ 'Filosofía', 'Biología' ],
      orientation: 'Científico'
    },
    {
      name: 'Florencia',
      age: 16,
      grade: 4,
      group: 'A',
      subjects: [ 'Inglés', 'Historia' ]
    }
  ]


mongoose.connect('mongodb://127.0.0.1:27017/estudiantes')
  .then(async () => {
}) 
  .catch(err => console.log(err));

  