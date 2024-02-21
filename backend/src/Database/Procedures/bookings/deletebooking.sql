CREATE OR ALTER PROCEDURE deletebooking(@bookingId VARCHAR(255))
AS
BEGIN
    DELETE FROM bookings 
    WHERE bookingId = @bookingId
END
 --isDeleted column