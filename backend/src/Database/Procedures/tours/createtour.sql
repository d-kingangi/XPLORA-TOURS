CREATE OR ALTER PROCEDURE createtour(
    @tourId VARCHAR (255),
    @destination VARCHAR(255),
    @price DECIMAL,
    @startDate DATETIME,
    @endDate DATETIME
)
AS
BEGIN
    INSERT INTO tours(tourId, destination, price, startDate, endDate)
    VALUES(@tourId, @destination, @price, @startDate, @endDate)
END