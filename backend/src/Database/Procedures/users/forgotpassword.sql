CREATE OR ALTER PROCEDURE forgotpassword(@email VARCHAR(255), @password VARCHAR(255))
AS
BEGIN
    UPDATE users SET password = @password WHERE email=@email
END