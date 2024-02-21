CREATE OR ALTER PROCEDURE deletereview (@reviewId VARCHAR(255))
AS
BEGIN
    DELETE FROM reviews
    WHERE reviewId = @reviewId
END