CREATE OR ALTER PROCEDURE getoneuser (@userId VARCHAR)
AS
BEGIN
    SELECT * FROM users WHERE userId = @userId
END