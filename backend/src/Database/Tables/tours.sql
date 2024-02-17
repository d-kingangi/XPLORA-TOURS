CREATE TABLE tours(
    tourId  VARCHAR PRIMARY KEY NOT NULL,
    destination VARCHAR NOT NULL,
    content VARCHAR, 
    price DECIMAL NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    isDeleted BIT DEFAULT 0,
)