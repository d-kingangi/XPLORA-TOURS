CREATE OR ALTER PROCEDURE deletetour(@tourId VARCHAR(255))
AS
BEGIN
    UPDATE tours SET isDeleted = 1 WHERE tourId = @tourId
END

-- -isDeleted COLUMN__