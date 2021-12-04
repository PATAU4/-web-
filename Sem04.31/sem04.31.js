/*
1) Создайте объект city1 (var city1 = {}), 
укажите у него свойства name (название города, строка) со значением «ГородN» 
и population (населенность города, число) со значением 10 млн.
*/
console.log('---ЗАДАНИЕ №1-3 В КОДЕ---')
let city1 = {

    name: 'Москвачкала' ,
    popilation: 10**7,

    get getName() {
        return this.name;
    },

    get exportStr(){
        return this.name, this.popilation;
    },

    get getCity(){
        return getObj( this.name, this.popilation);
    }   
};

/*
2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
*/
let city2 = {

    name: 'Российстан' ,
    popilation: 145*(10**6),

    get getName() {
        return this.name;
    },
    get exportStr(){
        return this.name, this.popilation;
    }
};

/*
3) Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
*/

//console.log(city1.getName, city2.getName);

/*
4)	Создайте методы exportStr() у каждого из объектов. 
Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». 
Для второго города будет строка со своими значениями. 
Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
*/
console.log('---ЗАДАНИЕ №4---')
for ( exportStr in city1 ){
    if ( exportStr == 'name' || exportStr == 'popilation'){
        console.log(exportStr + " = " + city1[exportStr]);
    };
};
for ( exportStr in city2 ){
    if ( exportStr == 'name' || exportStr == 'popilation'){
        console.log(exportStr + " = " + city2[exportStr]);
    };
};

/*
5)	Создайте глобальную функцию getObj(), которая возвращает this. 
А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. 
Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
*/
console.log('---ЗАДАНИЕ №5---')
function getObj( this_name, this_population ){
    console.log(this_name);
    console.log(this_population);
}
city1.getCity;

/*
6)	(*) Создать объект obj, с методами method1(),method2() и method3(). 
В методе method3() должна возвращаться строка «метод3». 
Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
*/
console.log('---ЗАДАНИЕ №6---')
let obj = {
    method1: function() {
        return this
    },

    method2: function() {
        return this
    },

    method3: function() {
       console.log('метод3');
    }
  };
obj.method1().method2().method3()
/*
7)	Создайте массив d1 с числовыми величинами 45,78,10,3.  
Добавьте в массив d1 еще одно число ( d1[7] = 100). 
Выведите в консоль весь массив и его элементы с индексами 4, 5 и 6.
*/
console.log('---ЗАДАНИЕ №7---')
let d1 = [45,78,10,3];
d1[7] = 100;
/*
for ( let i=0;i<d1.length;i++){
    console.log(d1[i]);
    if ( d1[i] == undefined){
        console.log('Vlad - pidor');
        d1.push('');
    };
}
console.log(d1);
*/
/*
a = [...Array(8).keys()];

for ( let i=0;i<a.length;i++){
    console.log(a[i]);}
d1.splice(index, 0, item);
console.log(a);
*/
let array_last = []
d1.forEach(function(item, index) {
    //console.log(`Значение:${item}, Индекс:${index}`);
    array_last.push(index)
});
array_last = array_last.slice(-2)
console.log(array_last);
    
a = [...Array( array_last[0], array_last[1] ).keys()];
console.log(a);

b = [...Array(2).keys()];
console.log(b);