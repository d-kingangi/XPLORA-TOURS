CREATE OR ALTER PROCEDURE getonetour (@tourId VARCHAR(255))
AS 
BEGIN
    SELECT * FROM tours WHERE tourId = @tourId
END