CREATE OR ALTER PROCEDURE updatebooking(
    @bookingId VARCHAR(255),
    @userId VARCHAR(255),
    @tourId VARCHAR(255),
    @bookingDate DATETIME
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
