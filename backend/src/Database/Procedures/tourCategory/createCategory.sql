CREATE OR ALTER PROCEDURE createCategory(@categoryId VARCHAR(255), @categoryName VARCHAR(255), @categoryDescr TEXT)
AS
BEGIN
INSERT INTO tourCategory(categoryId, categoryName, categoryDescr)
VALUES (@categoryId, @categoryName, @categoryDescr)
END
