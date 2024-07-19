DROP DATABASE IF EXISTS book_buddies_db;
CREATE DATABASE book_buddies_db;


\c book_buddies_db;


CREATE TABLE book_club (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL,
   location VARCHAR(50) NOT NULL
);


CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    publication_year INTEGER,
    read VARCHAR(10),
    user_rating INTEGER
);


CREATE TABLE book_user (
   id SERIAL PRIMARY KEY,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(100) NOT NULL,
   book_club_id INTEGER NOT NULL,
   FOREIGN KEY (book_club_id)
   REFERENCES book_club(id)
   ON DELETE SET NULL,
   book_id INTEGER NOT NULL,
   FOREIGN Key (book_id)
   REFERENCES book(id)
);


CREATE TABLE meeting (
    id SERIAL PRIMARY KEY,
    date DATE,
    location VARCHAR(50) NOT NULL,
    time VARCHAR(15) NOT NULL,
    book_chapter INTEGER,
    book_club_id INTEGER NOT NULL,
    FOREIGN KEY (book_club_id)
    REFERENCES book_club(id)
    ON DELETE SET NULL,
    book_id INTEGER NOT NULL,
    FOREIGN Key (book_id)
    REFERENCES book(id)
);