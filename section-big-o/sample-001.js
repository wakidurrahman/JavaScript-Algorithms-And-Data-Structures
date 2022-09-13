const nemo = ['nemo'];

function findNemo(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 'nemo') {
            console.log('Found NEMO');
        }
        
    }
}

findNemo(nemo)