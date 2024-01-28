// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "Melbourne"
}

//1 non destructive

function updateEmployeeWithKeyAndValue() {
    const newEmployee = {...employee}
    newEmployee.name = 'Sam'
    newEmployee.streetAddress = '11 Broadway'
    return newEmployee
}

console.log(updateEmployeeWithKeyAndValue());

//2 detructive
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee;
}


console.log(destructivelyUpdateEmployeeWithKeyAndValue());

//delete employee by key (nondestrucitve)
function deleteFromEmployeeByKey() {
    const deleteEmployee = {...employee}
    delete deleteEmployee.name
    
    return deleteEmployee;
}

console.log(deleteFromEmployeeByKey());

// delete employee (destructive)
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    delete employee.streetAddress;
    
    return employee;
}

console.log (destructivelyDeleteFromEmployeeByKey());
