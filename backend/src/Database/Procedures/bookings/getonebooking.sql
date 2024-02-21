--get single booking for a tour
CREATE OR ALTER PROCEDURE getonebooking (@bookingId VARCHAR(255))
AS
BEGIN 
    SELECT * FROM bookings WHERE bookingId = @bookingId
END
