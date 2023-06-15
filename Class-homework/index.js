//task
//Ստեղծել մի օբյեկտ ինչոր անհայտ class-ի օգնությամբ obj = new Human("John","Smith"),
// այդ օբյեկտը իր հերթին պետք է ունենա  հետևյալ property-նեը՝
//name: "John",
//surname: "Smith",
//speed:0,
//state:undefined
//բացի դրանից չնայած այն չունի իր սեփական մեթոդները, ենթարկվում է հետևյալ մեթոդներին՝ 
//run(speed), stop(), changeState(state)  ընդ որում run մեթոդը օբյեկտի վրա կանչելիս 
//և որպես արգումենտ նշելով որևէ արագություն պետք է օբյեկտի speed property-ն փոխվի տրված
//արագության չափով և alert  լինի, name-ի speed-ի արժեքները։Իսկ stop  մեթոդի դեպքում 
// speed property-ն նորից դառնա 0 և alert լինի, name-ի արժեքը և հետևյալ տեքստը "is stopped", իսկ
//changeState մեթոդի կանչի դեպքում և որպես արգումենտ նխելով  որպես string որևէ 
//կարգավիրճակ, օրինակ "thinking" պետք է state property-ի  արժեքը փոխվի գրված string-ով։

//Ստեղծել Human  class



class Human {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
      this.speed = 0;
      this.state = undefined;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`Name: ${this.name}\nSpeed: ${this.speed}`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} is stopped.`);
    }
  
    changeState(state) {
      this.state = state;
    }
  }
  
  let obj = new Human("John", "Smith");
  
  obj.run(10); //  name-ի speed-ի արժեքները
  obj.stop(); // name-ի արժեքը և հետևյալ տեքստը "is stopped"
  obj.changeState("Thinking");
  console.log(obj.state); // "Thinking"  