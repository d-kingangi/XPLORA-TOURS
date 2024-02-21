CREATE TABLE reviews (
    reviewId VARCHAR(255) PRIMARY KEY NOT NULL,
    userID VARCHAR(255) NOT NULL,
    tourId VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    CONSTRAINT fk_reviews_users FOREIGN KEY (userID)
    REFERENCES users(userId),
    CONSTRAINT fk_reviews_tours FOREIGN KEY(tourId)
    REFERENCES tours(tourId)
)