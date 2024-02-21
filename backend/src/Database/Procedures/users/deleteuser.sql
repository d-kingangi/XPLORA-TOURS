CREATE OR ALTER PROCEDURE deleteuser(@userId VARCHAR(255))
AS
BEGIN
    UPDATE users SET isDeleted = 1 WHERE userId = @userId
END