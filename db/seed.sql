----add a department----

INSERT INTO department (name)
VALUES("Engineering"),
      ("Marketing"),
      ("Finance"),
      ("legal"),
      ("Sales");


----add an employee----

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Finn", "Brown", 1, null),
       ("Mia", "Allen", 2, 1);

----add a role----

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 300000, 1),
       ("Sofware Engineer", 200000, 1);


