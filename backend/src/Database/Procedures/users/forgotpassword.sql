CREATE OR ALTER PROCEDURE forgotpassword(@email VARCHAR, @password VARCHAR)
AS
BEGIN
    UPDATE users SET password = @password WHERE email=@email
END