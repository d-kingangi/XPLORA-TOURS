CREATE OR ALTER PROCEDURE updatetour(
    @tourId VARCHAR,
    @destination VARCHAR,
    @price VARCHAR,
    @startDate DATETIME,
    @endDate DATETIME
)
AS 
BEGIN 
    UPDATE tours SET
        tourId = @tourId,
        destination = @destination,
        price = @price,
        startDate = @startDate,
        endDate = @endDate
    WHERE tourId = @tourId
END