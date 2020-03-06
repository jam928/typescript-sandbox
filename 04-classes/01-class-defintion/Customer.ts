class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirstName: string, theLast: string) {
    this.firstName = theFirstName;
    this.lastName = theLast;
  }
}

// lets create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName + " " + myCustomer.lastName);
