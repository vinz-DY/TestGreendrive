-- Active: 1698236999326@@127.0.0.1@3306@greendrive
CREATE TABLE state (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(255) NULL
);

CREATE TABLE connectic (
  id INT PRIMARY KEY AUTO_INCREMENT,
  plugType VARCHAR(255) NULL
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isAdmin boolean NULL
);

CREATE TABLE terminal(
   id                 INT PRIMARY KEY AUTO_INCREMENT,
  city               VARCHAR(97) NULL,
  adresseStation     VARCHAR(103) NULL,
  xlongitude         NUMERIC(23,16) NULL,
  ylatitude          NUMERIC(22,15) NULL,
  power              VARCHAR(5) NULL,
  acces_recharge     VARCHAR(94) NULL,
  access             VARCHAR(49) NULL,
  localisation       VARCHAR(255) NULL,
  region             VARCHAR(26) NULL,
  connectic_id INTEGER NOT NULL,
  CONSTRAINT fk_terminal_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  state_id INTEGER NOT NULL,
  CONSTRAINT fk_terminal_state FOREIGN KEY (state_id) REFERENCES state(id)
);


CREATE TABLE car (
  id INT PRIMARY KEY AUTO_INCREMENT,
  licensePlate VARCHAR(255) NULL,
  brand VARCHAR(255) NULL,
  model VARCHAR(255) NULL,
  connectic_id INT NOT NULL,
  CONSTRAINT fk_car_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  user_id INT NOT NULL,
  CONSTRAINT fk_car_user FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  startTime datetime NULL,
  car_id INT NOT NULL,
   CONSTRAINT fk_reservations_car FOREIGN KEY (car_id) REFERENCES car(id),
  terminal_id INT NOT NULL,
 CONSTRAINT fk_reservations_terminal FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);


CREATE TABLE profil (
  id INT PRIMARY KEY AUTO_INCREMENT,
  lastname VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  birthdate VARCHAR(255) NOT NULL,
  gender ENUM("Male", "Female", "Non-Binary", "Other") NOT NULL,
  postalCode VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT fk_profil_user FOREIGN KEY (user_id) REFERENCES user(id)
);

