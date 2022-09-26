const fish = ['dory', 'bruce', 'marlin', 'O_n-001'];
const single = ['O_n-001'];
const everyone = ['dory', 'bruce', 'marlin', 'O_n-001', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('O_n-001');


function findSpecificNameFromArray(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 'O_n-001') {
            console.log('Found O_n-001');
        }
    }
}

findSpecificNameFromArray(single); // O(n) ----> Linear Time