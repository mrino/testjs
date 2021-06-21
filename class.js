class Animal {
    constructor(type, name, sound){
        console.log('생성자다');
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log("안녕");
    }
}

class Dog extends Animal {
    constructor(name, sound){
        super("개", name, sound);
    }
}

