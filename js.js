 // metodo forEach
 const num = [2,6,3,8];
 function eachSandra (array, callback) {
     for(let i=0; i<array.length; i++){
         callback(array[i]);
     }
 }

 _ = {
// metodo filter
filter: (array, fn) => {
    const filteredData = [];
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i], i, array)) {
            filteredData.push(array[i]);
        }
    }
    return filteredData;
}, // Metodo map
map: (array, fn) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray;
},// Metodo find
find : (array, fn) =>{
    let value = undefined;
    for(let i=0; i< array.length; i++){
       if(fn(array[i])){
        value = array[i];
        return value;
       }
    }
    return value;
},// Metodo findIndex
findIndex : (array,fn) => {
    let index = -1;
    for(let i=0; i<array.length; i++){
        if(fn(array[i])){
            index = i;
            return index;
        }
    }
    return index;
},
// Metodo contain, ademas queria saber la posicion en donde se encuentra el valor.
contain : (array, value) =>{
    let index = -1;
    for(let i=0; i<array.length; i++){
        if(array[i] === value){
            index = i;
            console.log('Position: '+ index);
            return true; 
        }
    }
    console.log('No exist value');
    return false;
},
 }
function pluck(objs, name) {
    let sol = [];
    for(let i in objs){
        if(objs[i].hasOwnProperty(name)){
            sol.push(objs[i][name]);
        }
    }
    return sol;
}
 
console.log(pluck([{a:'cesar', b:0}, {a:'Jorge', b:0}], 'a'));

