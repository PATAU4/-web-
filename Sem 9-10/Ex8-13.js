/*Список.08

Объекты могут быть использованы для построения различных структур данных. 
Часто встречающаяся структура – список (не путайте с массивом).
Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
Списки удобны тем, что они могут делиться частью своей структуры. 

Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, 
где list – это ссылка на ранее объявленную переменную. Это два независимых списка, 
при этом у них есть общая структура list, которая включает три последних элемента каждого из них. 

Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.

Напишите функцию arrayToList, которая строит такую структуру, 
получая в качестве аргумента [1, 2, 3], а также функцию listToArray, 
которая создаёт массив из списка. 
Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, 
где этот элемент добавлен спереди к первоначальному списку, и функцию nth, 
которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, 
или же undefined в случае отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.*/
console.log('----------------------ЗАДАНИЕ 8------------------------');
arr = [1,2,3,4,5,6];
list = {};
// Запись в конец
function arrayToList(arr){
    for ( let i=arr.length-1;i>-1;i-- ) {
        if ( i+1 == arr.length ){
            list= {
                value:arr[i], rest:null
        };}else{
            list= {
                value:arr[i], rest:list
                  };
};};
console.log(list);
};
arrayToList(arr);

arr = [1,2,3];
// Запись в начало
function pretend(arr){
    for ( let i=0; i<arr.length; i++ ) {
        
            list= {
                value:arr[i], rest:list
        };
};
console.log(list);
};
pretend(arr);


function listToArray(list){
    
    var new_arr = [];
    new_arr = [list.value];
    while (list.rest!=null){
        list = list.rest;
        new_arr.push(list.value);
    };
    
    return(new_arr);
};

var list = {value: 1, rest: {value: 2, rest: {value: 3, rest: {value: 4, rest: {value: 5, rest: {value: 6, rest: null}}}}}};
console.log(listToArray(list));
// Поиск по индексу
function nth(index,list){
    console.log(listToArray(list) [index]);
};
var list = {value: 1, rest: {value: 2, rest: {value: 666, rest: {value: 4, rest: {value: 5, rest: {value: 6, rest: null}}}}}};
nth(2,list);

console.log('----------------------ЗАДАНИЕ 9------------------------');
/*Глубокое сравнение.09

Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. 
Но иногда полезно было бы сравнить объекты по содержимому.
Напишите функцию deepEqual, которая принимает два значения и возвращает true, 
только если это два одинаковых значения или это объекты, 
свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, 
используйте оператор typeof. 
Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. 
Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”*/

var list=[1,2,3];
var list2=[1,2,3];

function deepEqual(first_obj, second_obj){
if (first_obj == null || second_obj == null){
    console.log('Null in compare!');
}else{
if ( typeof(first_obj) == 'object' && typeof(second_obj) == 'object' ){
    console.log('DeepEqual');
    console.log(first_obj===second_obj);
}else
{
    console.log('Equal');
    console.log(first_obj==second_obj);
}}}
deepEqual(list,list);
console.log('----------------------ЗАДАНИЕ 10------------------------');

/*
Свертка.10

Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, 
у которого есть все элементы входных массивов.
*/

var arr = [[1,2,3], [4,5,6], [7,8,9]];
new_arr = arr.reduce(function(a, b){ 
return a.concat(b)
});
console.log(new_arr);
console.log('----------------------ЗАДАНИЕ 11------------------------');
/*
Разница в возрасте матерей и их детей.11

Используя набор данных из примера, 
подсчитайте среднюю разницу в возрасте между матерями и их детьми (это возраст матери во время появления ребёнка). 
Можно использовать функцию average, приведённую в главе.
Обратите внимание – не все матери, упомянутые в наборе, присутствуют в нём. 
Здесь может пригодиться объект byName, который упрощает процедуру поиска объекта человека по имени.
*/
let array =[
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
]

/*
Душистый План:
1.имя ребенка
2.дата рождения ребенка
3.имя матери
4.дата рождения матери
5.(дата рождения ребенка) - (дата рождения матери) = разница в возрасте (добавить в список)
6. разница в возрасте / на количество пар = ответ
*/
var byName = {};
var lst_of_diff = [];
array.forEach(function(child){
    byName[child.name] = child;

    //console.log(`Имя ребенка: ${child.name}`);
    //console.log(`Имя Матери: ${child.mother}`);
    //console.log(`Дата рождения ребенка: ${child.born}`);
    let a=child.born;
    let mother_name = child.mother;

    array.forEach(function(mother){
        byName[mother.name] = mother;
    
        if (mother.name == mother_name){
            //console.log(`Дата рождения матери: ${mother.born}`);
            let b=mother.born;
            let diff = a-b;
            lst_of_diff.push(diff);
            //console.log(`Разница в возрасте: ${diff}`)
            //console.log('--------------------------------------');
        };
    });
});
//console.log(lst_of_diff); // список пар разницы возрастов.

function average(lst_of_diff){
    function plus(a,b){ return a+b; }
    console.log(lst_of_diff.reduce(plus)/lst_of_diff.length)
    return lst_of_diff.reduce(plus)/lst_of_diff.length;
}
console.log('Средняя разница в возрасте: ')
average(lst_of_diff);
console.log('----------------------ЗАДАНИЕ 12------------------------');


/*
Историческая ожидаемая продолжительность жизни.12

Мы считали, что только последнее поколение людей дожило до 90 лет. 
Давайте рассмотрим этот феномен поподробнее. 
Подсчитайте средний возраст людей для каждого из столетий. 
Назначаем столетию людей, беря их год смерти, деля его на 100 и округляя: Math.ceil(person.died / 100).
*/

var byName = {};

var list_of_16 = [];
var list_of_17 = [];
var list_of_18 = [];
var list_of_19 = [];
var list_of_20 = [];
var list_of_21 = [];

array.forEach(function(person){
    byName[person.name] = person;
    
    switch ( Math.ceil(person.died/100) ){
        case 16:
            list_of_16.push(person.died-person.born);
            break;
        case 17:
            list_of_17.push(person.died-person.born);
            break;
        case 18:
            list_of_18.push(person.died-person.born);
            break;
        case 19:
            list_of_19.push(person.died-person.born);
            break;
        case 20:
            list_of_20.push(person.died-person.born);
            break;
        case 21:
            list_of_21.push(person.died-person.born);
            break;
    };
});
function average(list_of_age){
    function plus(a,b){ return a+b; }
    console.log(list_of_age.reduce(plus)/list_of_age.length)
    return list_of_age.reduce(plus)/list_of_age.length;
}
console.log('Средний возраст в 16 веке:') 
average(list_of_16);
console.log('Средний возраст в 17 веке:')
average(list_of_17);
console.log('Средний возраст в 18 веке:')
average(list_of_18);
console.log('Средний возраст в 19 веке:')
average(list_of_19);
console.log('Средний возраст в 20 веке:')
average(list_of_20);
console.log('Средний возраст в 21 веке:')
average(list_of_21);

console.log('----------------------ЗАДАНИЕ 13------------------------');
/*
Every и some.13
У массивов есть ещё стандартные методы every и some. 
Они принимают как аргумент некую функцию, которая, будучи вызванной с элементом массива в качестве аргумента, возвращает true или false. 
Так же, как && возвращает true, только если выражения с обеих сторон оператора возвращают true, метод every возвращает true, 
когда функция возвращает true для всех элементов массива. 

Соответственно, some возвращает true, когда заданная функция возвращает true при работе хотя бы с одним из элементов массива. 
Они не обрабатывают больше элементов, чем необходимо – 
например, если some получает true для первого элемента, он не обрабатывает оставшиеся.

Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.
*/

function Every(arr,func){
bool = false;
for ( let i=0; i<arr.length; i++ ){    
        if ( func(arr[i]) == false ){
            return bool;
        };
    };
    return true;
};

function Some(arr,func){
    for ( let i=0; i<arr.length; i++ ){    
        if ( func(arr[i]) ){
            return true;
        };
    };
    return false;
};


console.log(Every([NaN, NaN, NaN], isNaN))
console.log(Every([NaN, NaN, 4], isNaN))
console.log(Some([NaN, 3, 4], isNaN))
console.log(Some([2, 3, 4], isNaN))













