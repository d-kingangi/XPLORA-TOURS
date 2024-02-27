CREATE OR ALTER PROCEDURE getToursWithBookingsByUser
    @userId VARCHAR(255)
AS
BEGIN
    SELECT DISTINCT
        t.tourId,
        t.destination,
        t.startDate,
        t.endDate
    FROM
        tours t
    JOIN
        bookings b ON t.tourId = b.tourId
    WHERE
        b.userId = @userId
        AND b.isConfirmed = 0;
END;


--  EXEC getToursWithBookingsByUser @userId = 'userId';
