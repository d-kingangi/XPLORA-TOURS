CREATE OR ALTER PROCEDURE createbooking(
    @bookingId VARCHAR,
    @userId VARCHAR,
    @tourId VARCHAR,
    @bookingDate DATETIME
)
AS
BEGIN
    INSERT INTO bookings(bookingId, userId, tourId, bookingDate)
    VALUES(@bookingId, @userId, @tourId, @bookingDate)
END