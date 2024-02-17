CREATE TABLE bookings(
    bookingId VARCHAR PRIMARY KEY,
    userId VARCHAR NOT NULL,
    tourId VARCHAR NOT NULL,
    bookingDate DATETIME NOT NULL,
    CONSTRAINT FK_booking_users FOREIGN KEY (userId)
    REFERENCES users(userID),
    CONSTRAINT FK_booking_tours FOREIGN KEY (tourId)
    REFERENCES tours(tourId)
) 


