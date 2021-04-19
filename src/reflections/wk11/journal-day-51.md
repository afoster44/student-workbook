## What is the difference between a primary key and a foreign key
A Primary key is the unique identifier for the current sql table being made. A foreign id takes the id of the "foreign" property you have made to create a relationship and will reference to the table of that data to create a link.
---
## What is an Alias?
An Alias is used in a join statement so you can reference multiple different tables.
---
## Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:
string sql = @"SELECT
p.*,
d.*
FROM patients p
JOIN doctors d ON p.id = d.patientId
WHERE p.id = @id;";
return _db.Query<Patient, Doctor, Patient>(sql, (patient, doctor) => {
    patient.Doctor = doctor;
    return patient;
} new { id }, splitOn: ("id"));
---
## link to daily repository
https://github.com/afoster44/CS-contractors-many2many
