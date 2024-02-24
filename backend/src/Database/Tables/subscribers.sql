CREATE TABLE subs(
    email VARCHAR(255) NOT NULL,
    isConfirmed BIT DEFAULT 0
)

INSERT INTO subs (email) VALUES ('kencarson@gmail.com')