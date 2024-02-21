CREATE OR ALTER PROCEDURE createbooking(
    @bookingId VARCHAR(255),
    @userId VARCHAR(255),
    @tourId VARCHAR(255),
    @bookingDate DATETIME
)
AS
BEGIN
    INSERT INTO bookings(bookingId, userId, tourId, bookingDate)
    VALUES(@bookingId, @userId, @tourId, @bookingDate)
END

SELECT * FROM bookings