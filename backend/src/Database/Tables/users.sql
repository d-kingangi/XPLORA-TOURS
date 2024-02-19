CREATE TABLE users(
    userId VARCHAR PRIMARY KEY NOT NULL,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    passsword VARCHAR NOT NULL,
    isAdmin BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0,
    )

    -- Select * FROM users;

--     ALTER TABLE users
-- RENAME COLUMN passsword TO password;


    -- ALTER TABLE users SET (email VARCHAR) CONSTRAINT UNIQUE