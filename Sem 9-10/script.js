// Задание 1. Напишите цикл,  выводит такой треугольник:
let aboba = "#";
while (aboba.length<=7){
    console.log(aboba + "\n");
    aboba+="#";
}
/* Задание 2. FizzBuzz. 
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
*/

for (let i=1; i<101; i++){
    if(i % 3 == 0 && i % 5 != 0){
        console.log('Fizz');
      }else{
          if(i % 5 == 0 && i % 3 != 0){
            console.log('Buzz');
      }else{
          if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz');
      }else{
        console.log(i);}}}
}
  
/* Задание 3. Шахматная доска. 
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска
*/
let aboba1 = "# # # # ";
let aboba2 = " # # # #";
for (let counter=0;counter<8; counter++){
    if (counter%2 == 0){
        console.log(aboba1);
    }else{
        console.log(aboba2);
    }
}
// Задание 4. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
function min(frst,scnd){
    if  (frst>scnd){
        console.log(`Число ${scnd} минимальное`);
    }else{
        console.log(`Число ${frst} минимальное`);
    }
}
min(12,72)
min(102,5)

/* Задание 5. Считаем бобы. 
Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. 
Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). 
У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. 
Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.

Напишите функцию countBs, 
которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.

Затем напишите функцию countChar, 
которая работает примерно как countBs, только принимает второй параметр — символ, 
который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). 
Для этого переделайте функцию countBs.
*/
function countBs(str){
    let counterB=0;
    for (let i=0; i<str.length; i++){
        if(str.charAt(i)=='B'){
            counterB++;
        }
    }
    console.log(counterB)
}

let str='aBoBaaBoBaABOBAaBOBAbBOBAaBObAAbOBAbB'
countBs(str)


function countChar(str, char){
    let counterBchar=0;
    for (let i=0; i<str.length; i++){
        if(str.charAt(i)==char){
            counterBchar++;
        }
    }
    console.log(counterBchar)
}
countChar(str, 'B')

/* Задание 6. Сумма диапазона.  
Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, 
который содержит все числа из него, включая начальное и конечное.

Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.

В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. 
Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. 
Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
*/

function range(start, end){
    let i=start;
    let new_arr = []
    while (i<end+1){
        new_arr.push(i)
        i++;
    }
    console.log(new_arr);
}
range(1,10)

function sum(start, end){
    let i=start;
    let new_arr = []
    let counter3=0;
    while (i<end+1){
        counter3+=i;
        i++;
    }
    console.log(counter3);
}
sum(1,10)

function range2(start, end, step){
    let i=start;
    let new_arr1 = []
    while (i<end+1){
        new_arr1.push(i);
        if (step>0){i+=step;}else{
            console.log('не обработал')
        }
        
    }
    console.log(new_arr1)
}
range2(1,10,2)

/* Задание 7.Обращаем массив вспять. 
Напишите две функции, reverseArray и reverseArrayInPlace.

Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 

Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента.
Не используйте стандартный метод reverse.
*/

function reverseArray(arr){
    let reverse_arr=[]
    for(let i=arr.length-1;i>-1;i--){
        reverse_arr.push(arr[i]);
    }
    console.log(reverse_arr);
}

let arr=[1,2,3,4,5,88,7,8,9,10];
reverseArray(arr)

function reverseArrayInPlace(arr){
    let tmp_arr = arr
    for(let i=tmp_arr.length-1;i>-1;i--){
        arr=[]
        arr.push(arr[i]);
    }
    console.log(arr);
}
reverseArray(arr)