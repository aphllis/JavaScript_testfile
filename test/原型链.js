function Animal(name){
  this.name=name;
}
Animal.prototype.eat=function(){
  console.log(`${this.name} 正在吃东西`);
}

function Dog(name,breed){
  Animal.call(this,name);
  this.breed=breed;
}

Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.bark=function(){
  console.log(`${this.name} 在汪汪叫`);
}

const myDog=new Dog('小白','中华田园犬');
myDog.bark();
myDog.eat();
