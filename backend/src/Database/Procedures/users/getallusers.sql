CREATE OR ALTER PROCEDURE getallusers 
AS 
BEGIN 
    SELECT * FROM users
    WHERE isDeleted = 0
END