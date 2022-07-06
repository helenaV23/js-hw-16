// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

function assignObjects(obj1, obj2) {
    let assinedObj = {};
    for (let key in obj1) {
        assinedObj[key] = obj1[key];
    }
    for (let key in obj2) {
        assinedObj[key] = obj2[key];
    }
    return assinedObj;
}

console.log(assignObjects({x: 10, y: 20}, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));


// let obj3 = Object.assign({}, {x: 10, y: 20}, { z: 30 });
// console.log(obj3);