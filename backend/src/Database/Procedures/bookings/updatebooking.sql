CREATE OR ALTER PROCEDURE updatebooking(
    @bookingId VARCHAR,
    @userId VARCHAR,
    @tourId VARCHAR,
    @bookingDate VARCHAR
)
AS 
BEGIN
    UPDATE bookings SET
        bookingId = @bookingId,
        userId = @userId,
        tourId =@tourId,
        bookingDate = @bookingDate
    WHERE bookingId = @bookingId
END
