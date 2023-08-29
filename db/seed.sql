-- ----add a department----

INSERT INTO departments (name)
VALUES("Engineering"),
      ("Marketing"),
      ("Finance"),
      ("legal"),
      ("Sales");


-- ----add a role----

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 300000, 1),
       ("Sofware Engineer", 200000, 1);


-- ----add an employee----

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Finn", "Brown", 1, null),
       ("Mia", "Allen", 2, 1);
