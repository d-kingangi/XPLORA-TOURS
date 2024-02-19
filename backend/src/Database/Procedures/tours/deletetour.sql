CREATE OR ALTER PROCEDURE deletetour(@tourId VARCHAR)
AS
BEGIN
    UPDATE tours SET isDeleted = 1 WHERE tourId = @tourId
END

-- -isDeleted COLUMN__