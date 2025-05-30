const colleg = {
    name: 'mc',
    class:['11','12'],
    events: ['science fair','debating','21 feb'],
    unique: {
        color: 'gray',
        result: {
            gpa: 5,
            marit:'top'
        }
    }
}

// console.log(colleg.name)
// console.log(colleg.unique.color)
console.log(colleg['unique'].result.marit)
// console.log(colleg.events)
colleg.events[1] = '16 December'
console.log(colleg.events[1])
delete colleg.events;
console.log(colleg)