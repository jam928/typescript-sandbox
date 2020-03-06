var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLast) {
        this.firstName = theFirstName;
        this.lastName = theLast;
    }
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
