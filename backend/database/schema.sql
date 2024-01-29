CREATE TABLE state (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label varchar(255) NULL
);

CREATE TABLE connectic (
  id INT PRIMARY KEY AUTO_INCREMENT,
  plugType varchar(255) NULL
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  mail varchar(255) UNIQUE,
  password varchar(255) NULL,
  isAdmin boolean DEFAULT 0
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
  image              VARCHAR(255)NULL,
  connectic_id INTEGER NOT NULL,
  CONSTRAINT fk_terminal_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  state_id INTEGER NOT NULL,
  CONSTRAINT fk_terminal_state FOREIGN KEY (state_id) REFERENCES state(id)
);


CREATE TABLE car (
  id INT PRIMARY KEY AUTO_INCREMENT,
  licensePlate varchar(255) NULL,
  brand varchar(255) NULL,
  model varchar(255) NULL,
  image varchar(255) NULL,
  connectic_id INT NOT NULL,
  CONSTRAINT fk_car_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  user_id INT NOT NULL,
  CONSTRAINT fk_car_user FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE reservation (
  id INT PRIMARY KEY AUTO_INCREMENT,
  startTime datetime NULL,
  car_id INT NOT NULL,
   CONSTRAINT fk_reservation_car FOREIGN KEY (car_id) REFERENCES car(id),
  terminal_id INT NOT NULL,
 CONSTRAINT fk_reservation_terminal FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);


CREATE TABLE profil (
  id INT PRIMARY KEY AUTO_INCREMENT,
  lastname varchar(255),
  name varchar(255),
  gender varchar(255),
  birthdate varchar(255),
  postCode  varchar(255),
  cityProfil varchar(255),
  image varchar(255),
  user_id INT NOT NULL ,
  CONSTRAINT fk_profil_user FOREIGN KEY (user_id) REFERENCES user(id)
);