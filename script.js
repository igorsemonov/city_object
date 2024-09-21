
const city = ['name', 'area', 'population', 'main street', 'mayors name'];


function myFunc(arr) {

    const object = {};

    arr.forEach( element => {

        object[element] = prompt(`Enter ${element}:`);

     });

     return object;
    
    };

    const cityObj = myFunc(city);

    console.log(cityObj);