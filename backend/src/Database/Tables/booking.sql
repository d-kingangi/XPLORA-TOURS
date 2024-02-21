CREATE TABLE bookings(
    bookingId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    tourId VARCHAR(255) NOT NULL,
    bookingDate DATETIME NOT NULL,
    CONSTRAINT FK_booking_users FOREIGN KEY (userId)
    REFERENCES users(userID),
    CONSTRAINT FK_booking_tours FOREIGN KEY (tourId)
    REFERENCES tours(tourId)
) 

ALTER TABLE bookings ADD isConfimed BIT DEFAULT 0

SELECT * FROM bookings

