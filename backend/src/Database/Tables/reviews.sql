CREATE TABLE reviews (
    reviewId VARCHAR PRIMARY KEY NOT NULL,
    userID VARCHAR NOT NULL,
    tourId VARCHAR NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    CONSTRAINT fk_reviews_users FOREIGN KEY (userID)
    REFERENCES users(userId),
    CONSTRAINT fk_reviews_tours FOREIGN KEY(tourId)
    REFERENCES tours(tourId)
)