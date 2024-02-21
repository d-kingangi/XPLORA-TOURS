CREATE OR ALTER PROCEDURE updatetour(
    @tourId VARCHAR(255),
    @destination VARCHAR(255),
    @price VARCHAR(255),
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