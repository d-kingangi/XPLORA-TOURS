CREATE TABLE tourCategory (
    categoryId VARCHAR(255) NOT NULL,
    categoryName VARCHAR(255) NOT NULL,
    categoryDescr TEXT
)

ALTER TABLE tourCategory ADD isDeleted BIT DEFAULT 0
