CREATE OR ALTER PROCEDURE createreview (
    @reviewId VARCHAR,
    @userId VARCHAR,
    @tourId VARCHAR,
    @rating INT,
    @comment TEXT
)
AS 
BEGIN
    INSERT INTO reviews(reviewId, userId, tourId, rating, comment)
    VALUES(@reviewId, @userId, @tourId, @rating, @comment)
END
