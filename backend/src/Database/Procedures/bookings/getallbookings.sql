--get bookings for a single tour
CREATE OR ALTER PROCEDURE getallbookings (@tourId VARCHAR)
AS
BEGIN
    SELECT * FROM bookings 
    WHERE tourId = @tourId
END    