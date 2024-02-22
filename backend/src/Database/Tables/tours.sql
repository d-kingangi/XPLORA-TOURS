CREATE TABLE tours(
    tourId  VARCHAR(255) PRIMARY KEY NOT NULL,
    destination VARCHAR(255) NOT NULL,
    content VARCHAR(255), 
    price DECIMAL NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    isDeleted BIT DEFAULT 0,
)

SELECT * FROM tours

-- DELETE FROM tours
-- WHERE destination = 'H';

