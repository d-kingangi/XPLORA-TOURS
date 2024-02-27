CREATE PROCEDURE getUserBookingsWithTourDetails
    @userId VARCHAR(255)
AS
BEGIN
    SELECT
        b.bookingId,
        b.bookingDate,
        t.tourId,
        t.destination,
        t.content AS tourContent,
        t.price,
        t.startDate,
        t.endDate
    FROM
        bookings b
    JOIN
        tours t ON b.tourId = t.tourId
    WHERE
        b.userId = @userId
        AND b.isConfirmed = 0;
END;


-- EXEC getUserBookingsWithTourDetails @userId = 'your_user_id';
