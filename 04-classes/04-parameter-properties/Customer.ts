class Customer {
  /*
    Parameter properties: fields are automatically instaitted and created when using the constructor
  */
  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

// lets create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName + " " + myCustomer.lastName);
