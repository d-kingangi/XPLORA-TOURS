CREATE OR ALTER PROCEDURE recovertour(@tourId VARCHAR(255))
AS
BEGIN
    UPDATE tours SET isDeleted = 0 WHERE tourId = @tourId
END