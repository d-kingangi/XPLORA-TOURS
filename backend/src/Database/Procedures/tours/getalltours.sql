CREATE or ALTER PROCEDURE getalltours 
AS 
BEGIN 
    SELECT * FROM tours WHERE isDeleted = 0
END