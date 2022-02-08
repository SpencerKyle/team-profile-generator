const genIntern = function (intern) {
    return `
    <div>
        <h4>${intern.name}</h4>
        <span>Intern</span>
        <ul>
            <li>${intern.id}</li>
            <li>${intern.email}</li>
            <li>${intern.school}</li>
        </ul>
    </div>
    `;
}

const genEngineer = function (engineer) {
    return `
    <div>
        <h4>${engineer.name}</h4>
        <span>Engineer</span>
        <ul>
            <li>${engineer.id}</li>
            <li>${engineer.email}</li>
            <li>${engineer.github}</li>
        </ul>
    </div>
    `;
}

const genManager = function (manager) {
    return `
    <div>
        <h4>${manager.name}</h4>
        <span>Manager</span>
        <ul>
            <li>${manager.id}</li>
            <li>${manager.email}</li>
            <li>${officeNumber.github}</li>
        </ul>
    </div>
    `;
}

genHTML = (data) => {
    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Intern') {
            const internBlock = genIntern(employee);

            employeeArray.push(internBlock);
        }

        if (role === 'Engineer') {
            const engineerBlock = genEngineer(employee);

            employeeArray.push(engineerBlock);
        }

        if (role === 'Manager') {
            const managerBlock = genManager(employee);

            employeeArray.push(managerBlock);
        }
    }
}