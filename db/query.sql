----update employee's role----

select first_name, last_name from employee
Where role_id = ""
update employee
set role_id ''
where employeeNumber= "";




----View all employees----

SELECT * FROM employee
INNER JOIN role
ON employee.role_id = role.id;



----View all departments----

SELECT * FROM department


----View all roles----

SELECT * FROM role
