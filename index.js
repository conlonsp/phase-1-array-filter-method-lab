function findMatching(drivers, str) {
    return drivers.filter(d => {
        return d.toLowerCase() === str.toLowerCase()
    })
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(d => {
        return d.slice(0, str.length) === str
    })
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
    
function matchName(drivers, name) {
    return drivers.filter(d => {
        return d.name.toLowerCase() === name.toLowerCase()
    })
}

console.log(matchName(drivers, name))





































// function findMatching(drivers, name) {
//     return drivers.filter(driver => {
//         return driver.toLowerCase() === name.toLowerCase()
//     })
// }

// function fuzzyMatch(drivers, name) {
//     return drivers.filter(driver => {
//         return driver.slice(0, 2).toLowerCase() === name.slice(0, 2).toLowerCase()
//     })
// }

// function matchName(drivers, name) {
//     return drivers.filter(driver => {
//         return driver.name.toLowerCase() === name.toLowerCase()
//     })
// }




































// function findMatching(drivers, name) {
//     return drivers.filter(function(driver) {
//         return driver.toLowerCase() === name.toLowerCase()
//     })
// }

// function fuzzyMatch(drivers, name) {
//     return drivers.filter(function(driver) {
//         return driver.toLowerCase().substr(0, 2) === name.toLowerCase().substr(0, 2)
//     })
// }

// function matchName(drivers, name) {
//     return drivers.filter(function(driver) {
//         return name === driver.name
//     })
// }