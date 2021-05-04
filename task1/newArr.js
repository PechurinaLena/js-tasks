// polyfill for map function
Array.prototype.customMap = function (cb) {
    if (!cb || typeof cb !== 'function') {
        throw Error('cd is not a function')
    }
    if (!this) {
        throw Error('Cannot call map on null or undefined')
    }
    let newArray = []
    for (let item of this) {
        newArray.push(cb(item))
    }
    return newArray
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

const newArray = notes.customMap((note) => ({
    id: note.id,
    title: note.title,
}))
console.log(newArray)
