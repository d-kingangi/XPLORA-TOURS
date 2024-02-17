--get single booking for a tour
CREATE OR ALTER PROCEDURE getonebooking (@bookingId VARCHAR)
AS
BEGIN 
    SELECT * FROM bookings WHERE bookingId = @bookingId
END
