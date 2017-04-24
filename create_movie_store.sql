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
    CONSTRAINT uk_user_email UNIQUE (user_email),
    CONSTRAINT uk_user_name UNIQUE (user_name)
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
    date        date    not null,
    CONSTRAINT pk_shopping_cart PRIMARY KEY (user_id, movie_id),
    CONSTRAINT fk_shopping_cart_user FOREIGN KEY (user_id) REFERENCES USER(user_id),
    CONSTRAINT fk_shopping_cart_movie FOREIGN KEY (movie_id) REFERENCES MOVIE(movie_id)
);


INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("A Dog's Purpose","PG","2017",12.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("1","Comedy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("1","Fantasy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Beauty and Beast","PG","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("2","Fantasy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("2","Adventure");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Guardians Of The Galaxy Vol. 2","PG-13","2017",14.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("3", "Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("3","Fantasy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Ghost in the Shell","PG-13","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("4", "Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("4","Crime");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Rogue One","PG-13","2016",14.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("5", "Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("5","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Fantastic Beasts and Where to Find Them","PG-13","2016",15.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("6", "Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("6","Fantasy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Kong: Skull Island","PG-13","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("7", "Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("7","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Going in Style","PG-13","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("8", "Comedy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("8","Crime");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Moana","PG-13","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("9", "Animated");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("9","Adventure");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Mine","PG-13","2016",4.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("10", "Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("10","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Born in China","G","2016",14.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("11","Documentary");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Unforgettable","R","2017",24.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("12","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("12","Thriller");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Phoenix Forgotten","PG-13","2017",24.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("13","Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("13","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Free Fire","R","2016",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("14","Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("14","Crime");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("14","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Jeremiah Tower: The Last Magnificent","R","2016",6.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("15","Documentary");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Hymyilevä mies","PG-13","2016",12.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("16","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Promise","PG-13","2016",14.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("17","History");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("17","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Leap! ","PG","2016",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("18","Animated");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("18","Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("18","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Citizen Jane: Battle for the City","G","2016",10.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("19","Documentary");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("19","History");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Fate of the Furious","PG-13","2017",22.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("20","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("20","Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("20","Crime");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Boss Baby","PG","2017",19.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("21","Animated");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("21","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Smurfs: The Lost Village","PG","2017",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("22","Animated");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("22","Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("22","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Get Out","R","2017",21.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("23","Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("23","Crime");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Gifted","PG-13","2017",18.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("24","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Power Rangers","PG-13","2017",24.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("25","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("25","Adventure");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Case for Christ","PG","2017",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("26","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("La La Land","PG-13","2017",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("27","Romance");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("27","Drama");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("27","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Great Wall","PG-13","2017",20.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("28","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("28","Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("28","Fantasy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("28","Thriller");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("John Wick: Chapter 2","R","2017",15.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("29","Crime");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("29","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("29","Thriller");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Colossal","R","2016",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("30","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("30","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Void","G","2016",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("31","Thriller");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("31","Action");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Fifty Shades Darker","R","2017",24.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("32","Romance");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("32","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Zookeeper's Wife","PG-13","2017",21.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("33","History");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("33","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Kimi no na wa","PG","2016",12.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("34","Romance");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("34","Drama");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("34","Animated");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Belko Experiment","R","2016",6.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("35","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("35","Thriller");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Their Finest","R","2016",16.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("36","Romance");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("36","Drama");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("36","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("The Shack","PG-13","2016",9.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("37","Fantasy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("37","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Begum Jaan","PG-13","2017",19.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("38","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("38","Drama");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("Monster Trucks","PG","2016",9.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("39","Fantasy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("39","Action");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("39","Adventure");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("39","Comedy");
INSERT INTO MOVIE (movie_name,movie_rating,year,price) VALUES ("T2 Trainspotting","R","2017",19.99);
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("40","Comedy");
INSERT INTO CATEGORY(movie_id,CATEGORY) VALUES ("40","Drama");





