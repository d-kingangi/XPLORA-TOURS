CREATE  or ALTER PROCEDURE updateuser(
    @userId VARCHAR(255),
    @firstname VARCHAR(255), 
    @lastname VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255))
AS
BEGIN
    UPDATE users SET 
        firstname = @firstname,
        lastname = @lastname, 
        email = @email, 
        password = @password
    WHERE userId = @userId
END