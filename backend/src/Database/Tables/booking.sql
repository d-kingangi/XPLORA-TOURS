CREATE TABLE bookings(
    bookingId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    tourId VARCHAR(255) NOT NULL,
    bookingDate DATETIME NOT NULL,
    isConfimed BIT DEFAULT 0,
    CONSTRAINT FK_booking_users FOREIGN KEY (userId)
    REFERENCES users(userID),
    CONSTRAINT FK_booking_tours FOREIGN KEY (tourId)
    REFERENCES tours(tourId)
) 

-- INSERT INTO bookings(bookingId, userId, tourId, bookingDate)
-- VALUES( '11', '860c70c4-dd21-4de4-82ed-ec2b070fe913', '10', '2024-02-28 18:00:00.000' )

-- ALTER TABLE bookings ADD isConfimed BIT DEFAULT 0

-- SELECT * FROM bookings

