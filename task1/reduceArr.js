Array.prototype.customReduce = function (cb, initial) {
    if (!cb || typeof cb !== 'function') {
        throw Error('The cb is not a function')
    }
    if (!this) {
        throw Error('Cannot call reduce on null or undefined')
    }
    let values = this

    values.forEach((item) => {
        initial = cb(initial, item)
    })

    return initial
}

const notes = [
    {
        id: 1,
        title: 'Recipe',
        description: 'Ingredients include 2 eggs...',
        pagesCount: 2,
        isMarked: false,
        access: [],
    },
    {
        id: 2,
        title: 'Workouts',
        description: '3 sets of squats...',
        pagesCount: 1,
        isMarked: true,
        access: [],
    },
    {
        id: 3,
        title: 'Passwords',
        description: 'VISA ...',
        pagesCount: 6,
        isMarked: true,
        access: [],
    },
    {
        id: 4,
        title: 'To Do 2021',
        description: '1. Learn JS...',
        pagesCount: 3,
        isMarked: false,
        access: [],
    },
]

const initialValue = 0
const sumOfNotesPages = notes.customReduce(
    (sum, note) => sum + note.pagesCount,
    initialValue
)

console.log(sumOfNotesPages)
