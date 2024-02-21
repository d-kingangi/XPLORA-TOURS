CREATE OR ALTER PROCEDURE createreview (
    @reviewId VARCHAR(255),
    @userId VARCHAR(255),
    @tourId VARCHAR(255),
    @rating INT,
    @comment TEXT
)
AS 
BEGIN
    INSERT INTO reviews(reviewId, userId, tourId, rating, comment)
    VALUES(@reviewId, @userId, @tourId, @rating, @comment)
END
