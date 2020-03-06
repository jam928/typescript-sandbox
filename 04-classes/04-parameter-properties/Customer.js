"use strict";
var Customer = /** @class */ (function () {
    /*
      Parameter properties: fields are automatically instaitted and created when using the constructor
    */
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
