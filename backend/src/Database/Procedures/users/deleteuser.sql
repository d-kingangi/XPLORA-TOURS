CREATE OR ALTER PROCEDURE deleteuser(@userId VARCHAR)
AS
BEGIN
    UPDATE users SET isDeleted = 1 WHERE userId = @userId
END