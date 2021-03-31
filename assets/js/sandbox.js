function MyConstructor(){
  if(!new.target){
    return new MyConstructor();
  }

  this.name = "John";
}

console.log(MyConstructor());