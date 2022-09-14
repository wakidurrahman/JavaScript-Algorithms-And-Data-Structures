// #1 -- For loop in Javascript
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');


function findNemo(array) {
    let startTime = performance.now();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 'nemo') {
            console.log('Found NEMO');
        }
    }
    let endTime = performance.now();
    console.log(`Call to find Nemo took ${endTime - startTime} milliseconds.`)

}

findNemo(nemo)