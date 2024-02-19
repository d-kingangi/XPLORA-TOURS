CREATE OR ALTER PROCEDURE loginuser(@email VARCHAR, @password VARCHAR)
AS
BEGIN
    SELECT * FROM users WHERE email = @email
END