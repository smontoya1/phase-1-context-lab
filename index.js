/* Your Code Here */

function createEmployeeRecord (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};


function createEmployeeRecords (arrays) {
    return arrays.map(createEmployeeRecord)
};


function createTimeInEvent(dateTime) {
    const [date, time] = dateTime.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(time, 10)
    })

    return this;
 };


 function createTimeOutEvent(dateTime) {
    const [date, time] = dateTime.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(time, 10)
    })

    return this;
 };

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(element => element.date === date)
    const timeOut = this.timeOutEvents.find(element => element.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
} 

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll (employees) {
    return employees.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0)
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => employee.firstName === firstNameString);
}