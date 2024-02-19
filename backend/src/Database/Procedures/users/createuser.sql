CREATE OR ALTER PROCEDURE createuser(
    @userId VARCHAR,
    @firstname VARCHAR,
    @lastname VARCHAR,
    @email VARCHAR,
    @password VARCHAR
)
AS
BEGIN
    INSERT INTO users(userId, firstname, lastname, email, passsword)
    VALUES(@userId, @firstname, @lastname, @email, @password)
END