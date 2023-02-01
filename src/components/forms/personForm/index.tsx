interface IPerson{
    name:string;
    age:number;
    empCode?:number;
    }

class Person implements IPerson{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Ademir",48)

 export function PersonForm(){
    return(
        <>
        <div>Nome: {person.name}</div>
        <div>Idade: {person.age}</div>
        </>
    )
}
