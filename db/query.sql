use employees_db;
-- ----update employee's role----

select first_name, last_name from employees
Where role_id = 1;

update employee
set role_id = ""
where employeeNumber = "";

-- ----View all employees----

select * from employees;

SELECT * FROM employees
INNER JOIN roles
ON employees.role_id = roles.id;

-- ----View all departments----

SELECT * FROM departments;

-- ----View all roles----

SELECT * FROM roles;





