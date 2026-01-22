@nestjs/common  -> core nestjs decorators



class A{
    hi(){
        console.log('hey');
    }
}

class D{
    hi(){
        console.log('hey');
    }
}

const container = {
    CA : new A(),
    CD : new D()
}

class B {
    constructor(private a: A){
        this.a = a
    }
    talk(){
        this.a.hi();
    }
}

const obj = new B(container.CA)
obj.talk()
