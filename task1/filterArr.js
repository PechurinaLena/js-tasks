//polyfill for filter function
Array.prototype.customFilter = function(cb) {
  if (!cb || typeof cb !== 'function') {
    throw Error('The cb is not a function');
  }
  if (!this) {
    throw Error('Cannot call filter on null or undefined');
  }
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

const notes = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: []
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: []
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: []
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: []
  }
]

const filterNotes = notes.customFilter(notes => notes.isMarked)

console.log(filterNotes)