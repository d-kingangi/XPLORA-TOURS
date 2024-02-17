CREATE OR ALTER PROCEDURE deletereview (@reviewId VARCHAR)
AS
BEGIN
    DELETE FROM reviews
    WHERE reviewId = @reviewId
END