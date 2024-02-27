CREATE OR ALTER PROCEDURE getTourDetailsWithBookingsAndUsers
    @tourId VARCHAR(255)
AS
BEGIN
    SELECT
        t.tourId,
        t.destination,
        t.content AS tourContent,
        t.price,
        t.startDate,
        t.endDate,
        b.bookingId,
        b.bookingDate,
        u.userId,
        u.firstname,
        u.lastname,
        u.email
    FROM
        tours t
    JOIN
        bookings b ON t.tourId = b.tourId
    JOIN
        users u ON b.userId = u.userId
    WHERE
        t.tourId = @tourId
        AND t.isDeleted = 0
        AND b.isConfirmed = 0;
END;

-- EXEC getTourDetailsWithBookingsAndUsers @tourId = 'your_tour_id';

