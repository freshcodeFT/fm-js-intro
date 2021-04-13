const arr = [1,2,3,4,5];
const arr2 = ['some','thing'];
iterator = arr[Symbol.iterator]();

const myArr1 = new MyArray(...arr, ...arr2);

const myArr2 = new MyArray(100,200,300,400);

const myArr3 = new MyArray(...myArr1, ...myArr2);

for (const item of myArr3){
  console.log(item);
}