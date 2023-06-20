// let num1 = 5;
// let num2: number = 5;
// const isOdd = false;
// const isOdd2: boolean = false;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
//                          0           1            2
var PaymentStatusArr = ["Failed", "Successful", "Pending"];
var PaymentStatusObj = {
    0: "Failed",
    1: "Successful",
    2: "Pending",
};
var PaymentStatus2 = {
    Failed: "Failed",
    Successful: "Successful",
    Pending: "Pending",
};
PaymentStatus2.Failed = "Фаилед";
var usersTest = [
    { name: "Marto1", page: 1, offset: 5 },
    { name: "Marto2" },
    { name: "Marto3" },
    { name: "Marto4" },
    { name: "Marto5" },
    { name: "Marto5" },
];
