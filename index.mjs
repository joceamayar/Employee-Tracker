
import inquirer from 'inquirer';
import mysql from 'mysql2'

// create the connection to database - keep outside. not in a function
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employees_db'
});

connection.connect(function (err) {
    if (err) {
        console.log(err)
        throw err
    }
    console.log("DB connected!")
    start()
})

// surround inside a function that gets called from inquirer.then?

//--------------------User Choices------------------------
const questions = [
    {
        type: 'list',
        name: 'choice',
        message: "What would you like to do?  ",
        choices: ["view all departments", "add new department", "view all employees", "add new employee", "view all roles", "add new role", "update employee role", "Quit"]

    }
]
//--------------------View All Departments------------------------

const viewAllDepartments = () => {
    connection.query("SELECT * from departments", (err, data) => {
        if (err) throw err
        console.table(data)
        start()
    })
}

//--------------------Add New Departments------------------------


const addNewDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: 'addNewDepartment',
            message: 'What is the name of the Department?',
        }
    ]).then(answers => {
        connection.query("INSERT INTO departments SET ?",
            {
                name: answers.addNewDepartment
            }
        )
        start()
    })
}

//--------------------View All Employees------------------------


const viewAllEmployees = () => {
    connection.query("SELECT * FROM employees", (err, data) => {
        if (err) throw err
        console.table(data)
        start()
    })
}

//--------------------Add New Employee------------------------


const addNewEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'Please provide the employee\'s first name:',
        },
        {
            type: 'input',
            name: 'employeeLaststName',
            message: 'Please provide employee/\'s last nanme',
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: 'What is the role of the employee?',

        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Who is the employee\'s manager?',
        }


    ]).then(answers => {
        connection.query("INSERT INTO employees SET ?",
            {
                first_name: answers.employeeFirstName,
                last_name: answers.employeeLaststName,
                role_id: answers.employeeRole,
                manager_id: answers.employeeManager,
            }
        )
        start()
    })
}


//--------------------View All Roles------------------------

const viewAllRoles = () => {
    connection.query("SELECT * from Roles", (err, data) => {
        if (err) throw err
        console.table(data)
        start()
    })
}


//--------------------Add New Role------------------------


const addNewRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'Please provide new role:',
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Whats is the salary for this role?',
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'Which department does this role belongs to?',
        },

    ]).then(answers => {
        connection.query("INSERT INTO roles SET ?",
            {
                title: answers.roleName,
                salary: answers.roleSalary,
                department_id: answers.roleDepartment,
            }
        )
        start()
    })
}
//--------------------Update an employee role------------------------

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeUpdate',
            message: 'which employees role do you want to update?',
        },
        {
            type: 'input',
            name: 'assignNewRole',
            message: 'which role do you want to assign the selected employee?',
        },

    ]).then(answers => {
        connection.query("update employees set role_id = ? where id = ? ;",
            [answers.assignNewRole, answers.employeeUpdate]
        )
        start()
    })
}

//--------------------Quit------------------------
// const close = async () => {
// }

//--------------------Await Inquirer-----------------------

const start = async () => {
    await inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('answers ---> ', answers);
            if (answers.choice === "view all departments") {
                viewAllDepartments()
            }
            else if (answers.choice === "add new department") {
                addNewDepartment()
            }
            else if (answers.choice === "view all employees") {
                viewAllEmployees()
            }
            else if (answers.choice === "add new employee") {
                addNewEmployee()
            }
            else if (answers.choice === "view all roles") {
                viewAllRoles()
            }
            else if (answers.choice === "add new role") {
                addNewRole()
            }
            else if (answers.choice === "update employee role") {
                updateEmployeeRole()
            }
            else if (answers.choice === "Quit") {
                process.exit(0);
            }
        }).catch(err => {
            if (err) throw err;
        });
}