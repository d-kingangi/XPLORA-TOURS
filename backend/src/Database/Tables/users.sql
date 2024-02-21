CREATE TABLE users(
    userId VARCHAR(255) PRIMARY KEY NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isAdmin BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0,
    )

    -- INSERT INTO USERS(userId, firstname, lastname, email, password, isAdmin)
    -- VALUES('Tim', 'Roberts', )
    -- Select * FROM users;
-- UPDATE users
-- SET isAdmin = 1
-- WHERE firstname = 'Duncan'
--     ALTER TABLE users
-- RENAME COLUMN passsword TO password;


    -- ALTER TABLE users SET (email VARCHAR) CONSTRAINT UNIQUE

    -- ALTER TABLE users ADD content VARCHAR(255);

--     ALTER TABLE users
-- ALTER COLUMN userId VARCHAR(255);
--  DROP TABLE users