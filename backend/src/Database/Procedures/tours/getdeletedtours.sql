CREATE or ALTER PROCEDURE getdeletedtours 
AS 
BEGIN 
    SELECT * FROM tours WHERE isDeleted = 1
END