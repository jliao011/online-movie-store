DROP DATABASE IF EXISTS MOVIE_STORE;
CREATE DATABASE MOVIE_STORE;

USE MOVIE_STORE;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
    user_id         int             not null    AUTO_INCREMENT,
    user_email      varchar(40)     not null,
    user_name       varchar(40)     not null,
    password        varchar(80)     not null,
    CONSTRAINT pk_user PRIMARY KEY (user_id),
    CONSTRAINT uk_user_email UNIQUE (user_email)
);

DROP TABLE IF EXISTS ADMIN;
CREATE TABLE ADMIN (
    user_id         int         not null,
    CONSTRAINT pk_admin PRIMARY KEY (user_id),
    CONSTRAINT fk_admin FOREIGN KEY (user_id) REFERENCES USER(user_id)       
);

DROP TABLE IF EXISTS MOVIE;
CREATE TABLE MOVIE(
    movie_id        int             not null    AUTO_INCREMENT,
    movie_name      varchar(40)     not null,
    movie_rating    varchar(10)     not null,
    year            varchar(5)      not null,
    price           float(10,2)     not null,
    CONSTRAINT pk_movie PRIMARY KEY (movie_id),
    CONSTRAINT uk_movie UNIQUE (movie_name)
);

DROP TABLE IF EXISTS CATEGORY;
CREATE TABLE CATEGORY (
    movie_id        int             not null,
    category        varchar(40)     not null,
    CONSTRAINT pk_category PRIMARY KEY (movie_id, category),
    CONSTRAINT fk_category FOREIGN KEY (movie_id) REFERENCES MOVIE(movie_id) 
);

DROP TABLE IF EXISTS SHOPPING_CART;
CREATE TABLE SHOPPING_CART (
    user_id     int     not null,
    movie_id    int     not null,
    check_out   boolean not null,
    CONSTRAINT pk_shopping_cart PRIMARY KEY (user_id, movie_id),
    CONSTRAINT fk_shopping_cart_user FOREIGN KEY (user_id) REFERENCES USER(user_id),
    CONSTRAINT fk_shopping_cart_movie FOREIGN KEY (movie_id) REFERENCES MOVIE(movie_id)
);


INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("A Dog's Purpose","PG","2017",12.99);

