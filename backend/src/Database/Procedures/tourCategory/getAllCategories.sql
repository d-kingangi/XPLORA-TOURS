CREATE OR ALTER PROCEDURE getAllCategories
AS
BEGIN
SELECT * FROM tourCategory WHERE isDeleted = 0
END