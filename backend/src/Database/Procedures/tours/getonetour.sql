CREATE OR ALTER PROCEDURE getonetour (@tourId VARCHAR)
AS 
BEGIN
    SELECT * FROM tours WHERE tourId = @tourId
END