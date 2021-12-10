/*
1) Создайте объект city1 (var city1 = {}), 
укажите у него свойства name (название города, строка) со значением «ГородN» 
и population (населенность города, число) со значением 10 млн.
*/
console.log('---ЗАДАНИЕ №1-2 В КОДЕ---')
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
console.log('---ЗАДАНИЕ №3---')


console.log(city1.getName, city2.getName);
console.log(city2.getName, city1.getName);



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
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

console.log('---ЗАДАНИЕ №7---')
let d1 = [45,78,10,3];
d1[7] = 100;
let array_last = [];

d1.forEach(function(item, index) {
    array_last.push(index);
});

array_last = array_last.slice(-2);
for ( let i = array_last[0]+1; i < array_last[1]; i++){
    d1.splice( i, 1, 'Item' );
    
};
d1.forEach(function(item, index) {
    console.log(`Значение: ${item}, Индекс: ${index}`);
    array_last.push(index);
});
/*
8) Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .
*/
console.log('---ЗАДАНИЕ №8---')
let d2 = [45,78,10,3];
let sum2 = 0;
for (let i=0; i<d2.length; i++){
    sum2+=d2[i];
};
console.log(`Сумма элементов массива = ${sum2}`);

/*
9) Создайте массив d3 с числовыми величинами 45,78,10,3. 
Добавьте в массив d3 еще одно число (например, d[7] = 100) 
Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
*/
console.log('---ЗАДАНИЕ №9---')
let d3 = [45,78,10,3];
d3[7] = 100;
let sum3 = 0;
for ( let i in d3 ){
    if ( typeof(d3[i]) == 'number'){
        sum3+=d3[i];
    };
;};
console.log(`Сумма элементов массива = ${sum3}`);

/*
10) Создайте массив d4 с числовыми величинами 45,78,10,3. 
Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел. 
Вызовите d4.sort(my)
*/
console.log('---ЗАДАНИЕ №10---')
d4 = [45, 78, 10, 3]

function my(a,b){
    return( a - b );
};
console.log(d4.sort(my));

/*
12) Векторный тип. 
Напишите конструктор Vector, представляющий вектор в двумерном пространстве. 
Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
Дайте прототипу Vector два метода, plus и minus, 
которые принимают другой вектор в качестве параметра, 
и возвращают новый вектор, который хранит в x и y сумму или разность двух (один this, второй — аргумент)
Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y)
*/
console.log('---ЗАДАНИЕ №12---')
class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    };
    
    plus(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    };
    
    minus(vector) {
      return new Vector(this.x - vector.x, this.y - vector.y);
    };
    
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2 );
    };
}
  
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

/*
13) Создайте тип ячейки StretchCell(inner, width, height), 
соответствующий интерфейсу ячеек таблицы из этой главы. 
Он должен оборачивать другую ячейку (как делает UnderlinedCell - из примера книги), 
и убеждаться, что результирующая ячейка имеет как минимум заданные ширину и высоту, 
даже если внутренняя ячейка была бы меньше.
*/
 console.log('---ЗАДАНИЕ №13---')


class TextCell{

    constructor (TextCell_inner){
        this.TextCell_inner = TextCell_inner;
    };

    get getTextCell_inner() {
        return this.TextCell_inner;
    };
};

class StretchCell{
    constructor (inner, width, height){
        this.inner = inner;
        this.width = width;
        this.height = height;
    };

    minWidth() {
        let arr_width =  (this.inner).split('/n');
        let min_width = 0;
        for ( let i=0; i<arr_width.length; i++){
            if (arr_width[i].length > min_width){
                min_width = arr_width[i].length;
            };
        };
        if (this.width < min_width){
            this.width = min_width
            return min_width;
        }else{
            return this.width;
        };
    };

    minHeight() {
        let arr_height = this.inner.split('/n');
        if (this.height < arr_height.length){
            this.height = arr_height.length
            return this.height;
        }else{
            return this.height;
        };
    };
    draw(w, h){

        if ( w < this.width){
            w = this.width
        };

        let tmp_arr = [this.inner.split('/n')];
        let new_arr = [];
        for ( let i=0; i< tmp_arr.length; i++){
            new_arr = tmp_arr[i];
        }

        if ( h < this.height){
            h = this.height
        }else{
            for ( let i=new_arr.length; i<h; i++){
                new_arr[i] = (' ').repeat(w);
                };
        };
        return new_arr;
    };
}


s_c = (new StretchCell(new TextCell("abc").TextCell_inner, 0, 0));

console.log( s_c.minWidth() );
console.log( s_c.minHeight() );
console.log( s_c.draw(3, 2) );
