// Write your solution in this file!
var employee = {
    name: "Dylan"
}


function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
}

