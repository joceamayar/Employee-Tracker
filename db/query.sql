-- ----update employee's role----

select first_name, last_name from employees
Where role_id = "";

update employee
set role_id = ""
where employeeNumber = "";




-- ----View all employees----

SELECT * FROM employees
INNER JOIN roles
ON employees.role_id = roles.id;



-- ----View all departments----

SELECT * FROM departments;


-- ----View all roles----

SELECT * FROM roles;
