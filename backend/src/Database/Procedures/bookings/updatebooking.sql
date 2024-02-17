CREATE OR ALTER PROCEDURE updatebooking(
    @bookingId VARCHAR,
    @userId VARCHAR,
    @tourId VARCHAR,
    @bookingId VARCHAR
)
AS 
BEGIN
    UPDATE bookings SET
        bookingId = @bookingId,
        userId = @userId,
        tourId =@tourId,
        bookingDate = @bookingId
    WHERE bookingId = @bookingId
END
