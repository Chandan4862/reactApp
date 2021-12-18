class Person {
    constructor(fn,dob){
        this.fn = fn;
        this.dob = dob
        this.course = "EXTC"
    }

    calcAge(){
        return 2021 - this.dob
    }
}

class Student extends Person {
    constructor(fn,dob,course) {
            super(fn,dob)
        this.course = course
        this.introduce = "test"
    }

    introduce(){
        console.log(`Hello my name is ${this.fn} with course ${this.course}`)
    }
}

let p1 = new Student("Chandan",1996,"CS")
p1.introduce()
console.log(p1.calcAge(), p1.course)