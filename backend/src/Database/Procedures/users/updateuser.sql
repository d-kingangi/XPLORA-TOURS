CREATE PROCEDURE updateuser(
    @userId VARCHAR,
    @firstname VARCHAR, 
    @lastname VARCHAR,
    @email VARCHAR,
    @password VARCHAR)
AS
BEGIN
    UPDATE users SET 
        firstname = @firstname,
        lastname = @lastname, 
        email = @email, 
        password = @password
    WHERE userId = @userId
END