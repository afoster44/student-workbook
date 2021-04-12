## In a SQL table, what is the difference between information in a row and information in a column?
A row is the "parent" data and the column would be the "child" data. Meaning that the row would be like...name and each column would be each data inputs name.
---

## Demonstrate the basic structure for creating a new table called characters with the values name, age, description as strings, and an int id.
-- CREATE TABLE characters
-- (
--   id INT AUTO_INCREMENT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   age VARCHAR(255),
--   description VARCHAR(255),
--   PRIMARY KEY (id)
-- );


## What is the difference between the following statements:
---
DELETE FROM table_name;
DROP TABLE table_name;
---
Delete from actually doesn't exist and that would be TRUNCATE FROM and DROP TABLE would delete an entire table.
---