CREATE OR ALTER PROCEDURE deletebooking(@bookingId VARCHAR)
AS
BEGIN
    DELETE FROM bookings 
    WHERE bookingId = @bookingId
END
 --isDeleted column