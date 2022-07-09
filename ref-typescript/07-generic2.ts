interface IPerson {
    firstName: string,
    lastName: string
}

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

// type variable T memiliki restriction type atau pengawasan pada type Person
function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");// Error Argument of type 'string' is not assignable to parameter of type 'Person'.