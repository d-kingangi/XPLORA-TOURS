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
        tourId = @tour,
        destination = @destination,
        price = @price,
        startDate = @startDate,
        endDate = @endDate
    WHERE tourId = @tourId
END