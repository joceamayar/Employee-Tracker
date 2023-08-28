import inquirer from 'inquirer'; 


const questions = [

   //--------------------User Choices------------------------

    {
        type: 'list',
        name: 'choice',
        message: "What would you like to do?  ",
        choices:["view all departments", "add a department", "view all employees", "add an employee", "view all roles", "add a role", "update  employee role", "Quit" ]
    },

    //--------------------add department ------------------------

    {
      type: 'input',
      name: 'addDepartment',
      message: 'What is the name of the Department?',
      when: (answers) => {
        console.log(answers)
        if (answers.choice === "add a department") {
            return true;
        }},
     
    },
   //--------------------add employee ------------------------
    {
        
      type: 'input',
      name: 'employeeFirstName',
      message: 'whats is the employees first nanme', 
      when: (answers) => {
        console.log(answers)
        if (answers.choice === "add an employee") {
            return true;
        }}
    
    },
    {
        type: 'input',
        name: 'employeeLaststName',
        message: 'whats is the employees last nanme',
        when: (answers) => {
            console.log(answers)
            if (answers.choice === "add an employee") {
                return true;
            }}
      
      },
      {
        type: 'input',
        name: 'employeeRole',
        message:'what is the employees role', 
        when: (answers) => {
            console.log(answers)
            if (answers.choice === "add an employee") {
                return true;
            }}
      
      },
      {
        type: 'input',
        name: 'employeeManager',
        message:'who is the employees manager',
        when: (answers) => {
            console.log(answers)
            if (answers.choice === "add an employee") {
                return true;
            }}
      
      },
     //--------------------add a role ------------------------

     {
        
        type: 'input',
        name: 'roleName',
        message: 'whats is the name of the role', 
        when: (answers) => {
          console.log(answers)
          if (answers.choice === "add a role") {
              return true;
          }}
      
      },
      {
          type: 'input',
          name: 'roleSalary',
          message: 'whats is the salary for this role?',
          when: (answers) => {
              console.log(answers)
              if (answers.choice === "add a role") {
                  return true;
              }}
        
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'which department does this role belongs to?',
            when: (answers) => {
                console.log(answers)
                if (answers.choice === "add a role") {
                    return true;
                }}
          
          },

          //--------------------Update an employee role------------------------

          {
            type: 'input',
            name: 'updateRole',
            message: 'which employees role do you want to update?',
            when: (answers) => {
                console.log(answers)
                if (answers.choice === "update employee role") {
                    return true;
                }}
          
          },
          {
            type: 'input',
            name: 'assigNewRole',
            message: 'which role do you want to assign the selected employee?',
            when: (answers) => {
                console.log(answers)
                if (answers.choice === "update employee role") {
                    return true;
                }}
          
          },    

  ];
  
const start = async () => {

    await inquirer.
        prompt(questions)
        .then((answers) => {
            console.log('answers ---> ', answers);
        })
        .catch(err => {
            if(err) throw err;
        })
}

start()

