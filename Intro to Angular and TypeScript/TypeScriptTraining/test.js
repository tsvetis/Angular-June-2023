var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isEven = false;
var num = 4;
var str = "";
var peshoUser = {
    name: "Pesho",
    age: 21,
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    return AnotherUserClass;
}());
// API call
var anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Mitko", id: 2 },
    { firstName: "Maria", id: 3 },
];
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName));
});
// let isEven: boolean = false;
// let num: number = 4;
// let str: string = "";
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.speak = function () {
        console.log("hello!");
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Person;
}(Human));
var personIvan = new Person("Ivan", 33);
personIvan.speak();
