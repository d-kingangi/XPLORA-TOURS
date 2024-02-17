CREATE OR ALTER PROCEDURE deletetour(@tourId VARCHAR)
AS
BEGIN
    DELETE FROM tours 
    WHERE tourID = @tourId
END

-- -isDeleted COLUMN__