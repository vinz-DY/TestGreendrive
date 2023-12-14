CREATE TABLE state (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label varchar(255) NULL
);

INSERT INTO state (label) VALUES ("non active");
INSERT INTO state (label) VALUES ("active");

CREATE TABLE connectic (
  id INT PRIMARY KEY AUTO_INCREMENT,
  plugType varchar(255) NULL
);

INSERT INTO connectic (plugType) VALUES ("T2");
INSERT INTO connectic (plugType) VALUES ("EF");

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
  connectic_id INTEGER,
  CONSTRAINT fk_terminal_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  state_id INTEGER,
  CONSTRAINT fk_terminal_state FOREIGN KEY (state_id) REFERENCES state(id)
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  mail varchar(255) NULL,
  password varchar(255) NULL,
  isAdmin boolean NULL
);


CREATE TABLE car (
  id INT PRIMARY KEY AUTO_INCREMENT,
  licensePlate varchar(255) NULL,
  brand varchar(255) NULL,
  model varchar(255) NULL,
  connectic_id INT,
  CONSTRAINT fk_car_connectic FOREIGN KEY (connectic_id) REFERENCES connectic(id),
  user_id INT,
  CONSTRAINT fk_car_user FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  startTime datetime NULL,
  car_id INT,
   CONSTRAINT fk_reservations_car FOREIGN KEY (car_id) REFERENCES car(id),
  terminal_id INT,
 CONSTRAINT fk_reservations_terminal FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);


CREATE TABLE profil (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  lastname varchar(255),
  birthdate varchar(255),
  car_id INT,
   CONSTRAINT fk_profil_car FOREIGN KEY (car_id) REFERENCES car(id)
);


-- ..........TERMINAL ..........................................................

INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('Parking Quintaou','1 allée de Quintaou, Anglet',-1.5127680638813583,43.48396450961844,'18',NULL,NULL,'43.48396450961844,-1.5127680638813583',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('Parking des Dauphins','Place des Docteurs Gentilhe, Anglet',-1.5124430186266826,43.49989725773917,'18',NULL,NULL,'43.49989725773917,-1.5124430186266826',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('Parking Izadia','25 allée du Val Fleuri, Anglet',-1.5155546844999312,43.48207100351876,'18',NULL,NULL,'43.48207100351876,-1.5155546844999312',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ABVV Volvo St Ouen l''Aumône','135 Rue de Paris 95310 Saint-Ouen-l''Aumône',2.12245,49.035994,'7.36','Gratuit','24/24 7/7 jours','49.035994,2.12245','Ile-de-France',1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ABVV Volvo St Ouen l''Aumône','135 Rue de Paris 95310 Saint-Ouen-l''Aumône',2.12245,49.035994,'22.08','Gratuit','24/24 7/7 jours','49.035994,2.12245','Ile-de-France',1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('Airria 2 - 11 kW AC','7a chemin de la Dhuy 38240 Meylan',45.213163,5.7963701,'11','Payant','24/24 7/7 jours','5.7963701,45.213163',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-13E - Rue Frédéric Joliot Curie','Rue Frédéric Joliot Curie 0 MARSEILLE-13E',5.436152,43.342681,'22','payant','24h/24 7j/7','43.342681,5.436152',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('SAINT-PAUL-LEZ-DURANCE - D11','D11 13115 SAINT-PAUL-LEZ-DURANCE',5.710252,43.686469,'22','payant','24h/24 7j/7','43.686469,5.710252',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Parvis Hotel De Ville - Esplanade Bernadin Laugier','Parvis Hotel De Ville - Esplanade Bernadin Laugier 13800 ISTRES',4.988923,43.516083,'18','payant','24h/24 7j/7','43.516083,4.988923',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARIGNANE - Boulevard De La Libération','Boulevard De La Libération 0 MARIGNANE',5.217351,43.418544,'22','payant','24h/24 7j/7','43.418544,5.217351',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-13E - 6 Chemin De Palama','6 Chemin De Palama 0 MARSEILLE-13E',5.437851,43.352498,'22','payant','24h/24 7j/7','43.352498,5.437851',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MEYRARGUES - Police Municipale - Place Des Anciens Combattants','Police Municipale - Place Des Anciens Combattants 13650 MEYRARGUES',5.527233,43.637349,'22','payant','24h/24 7j/7','43.637349,5.527233',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AUBAGNE - 1465 Route Nationnale 8, Le Charrel','1465 Route Nationnale 8, Le Charrel 0 AUBAGNE',5.545049,43.284336,'22','payant','24h/24 7j/7','43.284336,5.545049',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-8E - Boulevard Edouard Herriot','Boulevard Edouard Herriot 13008 MARSEILLE-8E',5.390105,43.272778,'22','payant','24h/24 7j/7','43.272778,5.390105',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('SALON-DE-PROVENCE - Rue André Marie Ampère','Rue André Marie Ampère 0 SALON-DE-PROVENCE',5.107927,43.639222,'22','payant','24h/24 7j/7','43.639222,5.107927',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('PLAN-DE-CUQUES - Rue Du 14 Juillet - Parking Piscine','Rue Du 14 Juillet - Parking Piscine 13380 PLAN-DE-CUQUES',5.46472,43.347677,'22','payant','24h/24 7j/7','43.347677,5.46472',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Rue Neil Armstrong','Rue Neil Armstrong 0 AIX-EN-PROVENCE',5.347074,43.485668,'22','payant','24h/24 7j/7','43.485668,5.347074',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-3E - 28 Rue Jobin','28 Rue Jobin 0 MARSEILLE-3E',5.389845,43.309831,'22','payant','24h/24 7j/7','43.309831,5.389845',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('CASSIS - Parking Daudet','Parking Daudet 13260 CASSIS',5.536259,43.218608,'22','payant','24h/24 7j/7','43.218608,5.536259',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('VELAUX - Rue Diderot (Pl Du Bon Puit)','Rue Diderot (Pl Du Bon Puit) 13880 VELAUX',5.255214,43.523198,'22','payant','24h/24 7j/7','43.523198,5.255214',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-8E - Place Théo Lombard','Place Théo Lombard 13008 MARSEILLE-8E',5.383026,43.27085,'22','payant','24h/24 7j/7','43.27085,5.383026',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-3E - 28 Rue Jobin','28 Rue Jobin 0 MARSEILLE-3E',5.389845,43.309831,'22','payant','24h/24 7j/7','43.309831,5.389845',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-16E - Boulevard D''Annam','Boulevard D''Annam 0 MARSEILLE-16E',5.329846,43.361274,'22','payant','24h/24 7j/7','43.361274,5.329846',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-2E - 29 Boulevard De Dunkerque','29 Boulevard De Dunkerque 0 MARSEILLE-2E',5.367851,43.308184,'22','payant','24h/24 7j/7','43.308184,5.367851',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-9E - 83-81 Boulevard Du Redon','83-81 Boulevard Du Redon 0 MARSEILLE-9E',5.421871,43.253283,'22','payant','24h/24 7j/7','43.253283,5.421871',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Parking De La Mairie, Bd Bouyala D''Arnaud','Parking De La Mairie, Bd Bouyala D''Arnaud 13000 MARSEILLE',5.443135,43.297307,'4','payant','24h/24 7j/7','43.297307,5.443135',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('LE THOLONET - 664 Avenue Paul Julien','664 Avenue Paul Julien 0 LE THOLONET',5.487714,43.510783,'22','payant','24h/24 7j/7','43.510783,5.487714',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Cec Piscine','Cec Piscine 13800 ISTRES',4.995847,43.499057,'18','payant','24h/24 7j/7','43.499057,4.995847',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('PELISSANNE - Place Roux Brignoles','Place Roux Brignoles 13330 PELISSANNE',5.152651,43.631195,'22','payant','24h/24 7j/7','43.631195,5.152651',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('VITROLLES - Quartier Du Lion','Quartier Du Lion 0 VITROLLES',5.230562,43.454958,'22','payant','24h/24 7j/7','43.454958,5.230562',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-11E - 270 Route Des 3Lucs  La Valentine','270 Route Des 3Lucs La Valentine 0 MARSEILLE-11E',5.481858,43.298393,'22','payant','24h/24 7j/7','43.298393,5.481858',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-7E - 7 Place Saint-Victor','7 Place Saint-Victor 0 MARSEILLE-7E',5.366079,43.290685,'22','payant','24h/24 7j/7','43.290685,5.366079',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Cec Stade','Cec Stade 13800 ISTRES',4.992965,43.50076,'18','payant','24h/24 7j/7','43.50076,4.992965',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('LES PENNES-MIRABEAU - Vieille Route De La Gavotte (Eglise Des Cadeneaux)','Vieille Route De La Gavotte (Eglise Des Cadeneaux) 13170 LES PENNES-MIRABEAU',5.340986,43.393554,'22','payant','24h/24 7j/7','43.393554,5.340986',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('PORT-DE-BOUC - Rue De La République','Rue De La République 13110 PORT-DE-BOUC',4.981837,43.404731,'22','payant','24h/24 7j/7','43.404731,4.981837',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-4E - Rue Du Bosquet','Rue Du Bosquet 13004 MARSEILLE-4E',5.399566,43.300388,'22','payant','24h/24 7j/7','43.300388,5.399566',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ALLEINS - Avenue René Cassin','Avenue René Cassin 13980 ALLEINS',5.1569112,43.704091,'22','payant','24h/24 7j/7','43.704091,5.1569112',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('SAINT-MITRE-LES-REMPARTS - Résidence Les Remparts','Résidence Les Remparts 13920 SAINT-MITRE-LES-REMPARTS',5.011772,43.453829,'22','payant','24h/24 7j/7','43.453829,5.011772',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Avenue Jean Orsini - Parking De La Salle Des Fêtes De Puyricard','Avenue Jean Orsini - Parking De La Salle Des Fêtes De Puyricard 13540 AIX-EN-PROVENCE',5.422441,43.580561,'22','payant','24h/24 7j/7','43.580561,5.422441',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Cours Saint-Louis','Cours Saint-Louis 13090 AIX-EN-PROVENCE',5.453065,43.529819,'22','payant','24h/24 7j/7','43.529819,5.453065',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Gymnase Donadieu','Gymnase Donadieu 13800 ISTRES',4.988791,43.507643,'18','payant','24h/24 7j/7','43.507643,4.988791',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-7E - 113 Avenue De La Corse','113 Avenue De La Corse 13007 MARSEILLE-7E',5.356014,43.289968,'22','payant','24h/24 7j/7','43.289968,5.356014',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-4E - Avenue Des Chartreux','Avenue Des Chartreux 13004 MARSEILLE-4E',5.400736,43.310012,'22','payant','24h/24 7j/7','43.310012,5.400736',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Gymnase Donadieu','Gymnase Donadieu 13800 ISTRES',4.988791,43.507643,'18','payant','24h/24 7j/7','43.507643,4.988791',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Rue André Ampère (Paap)','Rue André Ampère (Paap) 13080 AIX-EN-PROVENCE',5.370653,43.490568,'22','payant','24h/24 7j/7','43.490568,5.370653',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ALLAUCH - Avenue Jean Moulin -  Parking Fassanaro','Avenue Jean Moulin -  Parking Fassanaro 0 ALLAUCH',5.488317,43.357858,'22','payant','24h/24 7j/7','43.357858,5.488317',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Chemin Des Plâtrières','Chemin Des Plâtrières 13080 AIX-EN-PROVENCE',5.419379,43.556706,'22','payant','24h/24 7j/7','43.556706,5.419379',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-13E - 61 Avenue De Saint-Just','61 Avenue De Saint-Just 0 MARSEILLE-13E',5.404849,43.317055,'22','payant','24h/24 7j/7','43.317055,5.404849',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-13E - 101 Rue Alphonse Daudet','101 Rue Alphonse Daudet 0 MARSEILLE-13E',5.409596,43.320297,'22','payant','24h/24 7j/7','43.320297,5.409596',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('PEYROLLES-EN-PROVENCE - Parking De L''Abreuvoir','Parking De L''Abreuvoir 0 PEYROLLES-EN-PROVENCE',5.584868,43.645533,'22','payant','24h/24 7j/7','43.645533,5.584868',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('BOUC-BEL-AIR - Boulevard Montesquieu','Boulevard Montesquieu 13320 BOUC-BEL-AIR',5.423155,43.44122,'22','payant','24h/24 7j/7','43.44122,5.423155',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-3E - 14 Rue Chanterac','14 Rue Chanterac 0 MARSEILLE-3E',5.369957,43.312724,'22','payant','24h/24 7j/7','43.312724,5.369957',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Cours Marcel Bremond','Cours Marcel Bremond 13290 AIX-EN-PROVENCE',5.387851,43.50363,'22','payant','24h/24 7j/7','43.50363,5.387851',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('TRETS - Place De La Libération','Place De La Libération 0 TRETS',5.688023,43.448682,'22','payant','24h/24 7j/7','43.448682,5.688023',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARIGNANE - Place Alderic Chave','Place Alderic Chave 13700 MARIGNANE',5.213539,43.417033,'22','payant','24h/24 7j/7','43.417033,5.213539',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-1E - 14 Allée Léon Gambetta','14 Allée Léon Gambetta 0 MARSEILLE-1E',5.38179,43.299055,'22','payant','24h/24 7j/7','43.299055,5.38179',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('CHATEAUNEUF-LES-MARTIGUES - Place Des Résistants','Place Des Résistants 13220 CHATEAUNEUF-LES-MARTIGUES',5.162934,43.382782,'22','payant','24h/24 7j/7','43.382782,5.162934',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ALLEINS - Avenue René Cassin','Avenue René Cassin 13980 ALLEINS',5.1569112,43.704091,'22','payant','24h/24 7j/7','43.704091,5.1569112',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Parking Technoptic','Parking Technoptic 13000 MARSEILLE',5.431385,43.344402,'4','payant','24h/24 7j/7','43.344402,5.431385',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARIGNANE - Boulevard De La Libération','Boulevard De La Libération 0 MARIGNANE',5.217351,43.418544,'22','payant','24h/24 7j/7','43.418544,5.217351',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('LA FARE-LES-OLIVIERS - Avenue René Seyssaud','Avenue René Seyssaud 0 LA FARE-LES-OLIVIERS',5.194176,43.551585,'22','payant','24h/24 7j/7','43.551585,5.194176',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Place Champollion','Place Champollion 13800 ISTRES',4.986984,43.504714,'18','payant','24h/24 7j/7','43.504714,4.986984',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Place Du Souvenir Français','Place Du Souvenir Français 13090 AIX-EN-PROVENCE',5.460704,43.526456,'22','payant','24h/24 7j/7','43.526456,5.460704',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ENTRESSENS - Place Dei Blagiaires','Place Dei Blagiaires 13118 ENTRESSENS',4.939013,43.593007,'18','payant','24h/24 7j/7','43.593007,4.939013',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ROQUEFORT-LA-BEDOULE - Avenue Marius Ghirardelli','Avenue Marius Ghirardelli 13830 ROQUEFORT-LA-BEDOULE',5.588032,43.248829,'22','payant','24h/24 7j/7','43.248829,5.588032',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-2E - 29 Boulevard De Dunkerque','29 Boulevard De Dunkerque 0 MARSEILLE-2E',5.367851,43.308184,'22','payant','24h/24 7j/7','43.308184,5.367851',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('LANCON-PROVENCE - Rue Conseiller De Trets (Rue De Bir Hakeim)','Rue Conseiller De Trets (Rue De Bir Hakeim) 13680 LANCON-PROVENCE',5.123069,43.591788,'22','payant','24h/24 7j/7','43.591788,5.123069',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('LA DESTROUSSE - Avenue Du Mistral','Avenue Du Mistral 0 LA DESTROUSSE',5.60471,43.376505,'22','payant','24h/24 7j/7','43.376505,5.60471',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-4E - Boulevard Jardin Zoologique','Boulevard Jardin Zoologique 13004 MARSEILLE-4E',5.396799,43.303235,'22','payant','24h/24 7j/7','43.303235,5.396799',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AURONS - Route De Pelissane','Route De Pelissane 13121 AURONS',5.156308,43.663796,'22','payant','24h/24 7j/7','43.663796,5.156308',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Place Albert Laforest','Place Albert Laforest 13080 AIX-EN-PROVENCE',5.420083,43.522361,'22','payant','24h/24 7j/7','43.522361,5.420083',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Cours Saint-Louis','Cours Saint-Louis 13090 AIX-EN-PROVENCE',5.453065,43.529819,'22','payant','24h/24 7j/7','43.529819,5.453065',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Cec Piscine','Cec Piscine 13800 ISTRES',4.995847,43.499057,'18','payant','24h/24 7j/7','43.499057,4.995847',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('PEYNIER - Avenue De La Garenne','Avenue De La Garenne 0 PEYNIER',5.639103,43.447876,'22','payant','24h/24 7j/7','43.447876,5.639103',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('VELAUX - Rue Diderot (Pl Du Bon Puit)','Rue Diderot (Pl Du Bon Puit) 13880 VELAUX',5.255214,43.523198,'22','payant','24h/24 7j/7','43.523198,5.255214',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('CASSIS - Parking Savon','Parking Savon 13260 CASSIS',5.53811,43.213528,'4','payant','24h/24 7j/7','43.213528,5.53811',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-8E - Avenue André Zénatti','Avenue André Zénatti 13008 MARSEILLE-8E',5.381914,43.247392,'22','payant','24h/24 7j/7','43.247392,5.381914',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Place Albert Laforest','Place Albert Laforest 13080 AIX-EN-PROVENCE',5.420083,43.522361,'22','payant','24h/24 7j/7','43.522361,5.420083',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-15E - 456 Rue De Lyon','456 Rue De Lyon 0 MARSEILLE-15E',5.360216,43.341629,'22','payant','24h/24 7j/7','43.341629,5.360216',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('CASSIS - Parking Savon','Parking Savon 13260 CASSIS',5.53811,43.213528,'4','payant','24h/24 7j/7','43.213528,5.53811',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Victor Hugo','Victor Hugo 13800 ISTRES',4.9899,43.51302,'18','payant','24h/24 7j/7','43.51302,4.9899',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Cec Stade','Cec Stade 13800 ISTRES',4.992965,43.50076,'18','payant','24h/24 7j/7','43.50076,4.992965',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('SALON-DE-PROVENCE - Avenue De Grans','Avenue De Grans 0 SALON-DE-PROVENCE',5.090649,43.635131,'22','payant','24h/24 7j/7','43.635131,5.090649',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('SALON-DE-PROVENCE - 270 Rue Victor Grignard','270 Rue Victor Grignard 0 SALON-DE-PROVENCE',5.056872,43.638515,'22','payant','24h/24 7j/7','43.638515,5.056872',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Campus Luminy','Campus Luminy 13000 MARSEILLE',5.438303,43.231932,'4','payant','24h/24 7j/7','43.231932,5.438303',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARTIGUES - Quai Général Leclerc','Quai Général Leclerc 13500 MARTIGUES',5.057812,43.40283,'22','payant','24h/24 7j/7','43.40283,5.057812',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-3E - 71 Avenue Roger Salengro','71 Avenue Roger Salengro 0 MARSEILLE-3E',5.37159,43.312827,'22','payant','24h/24 7j/7','43.312827,5.37159',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('GRANS - Rue De L''Egalité - Parking Place Du Souvenir Français','Rue De L''Egalité - Parking Place Du Souvenir Français 13450 GRANS',5.063095,43.605489,'22','payant','24h/24 7j/7','43.605489,5.063095',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('GARDANNE - Avenue D''Arménie (Semag)','Avenue D''Arménie (Semag) 13120 GARDANNE',5.44866,43.450954,'22','payant','24h/24 7j/7','43.450954,5.44866',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Campus Luminy','Campus Luminy 13000 MARSEILLE',5.438303,43.231932,'4','payant','24h/24 7j/7','43.231932,5.438303',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Parking De La Mairie, Bd Bouyala D''Arnaud','Parking De La Mairie, Bd Bouyala D''Arnaud 13000 MARSEILLE',5.443135,43.297307,'4','payant','24h/24 7j/7','43.297307,5.443135',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-2E - 1 Rue Jean François Leca','1 Rue Jean François Leca 0 MARSEILLE-2E',5.368833,43.301462,'22','payant','24h/24 7j/7','43.301462,5.368833',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Avenue De Tübingen','Avenue De Tübingen 13090 AIX-EN-PROVENCE',5.431899,43.524809,'22','payant','24h/24 7j/7','43.524809,5.431899',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Parking Des Arnavaux','Parking Des Arnavaux 13800 ISTRES',4.990593,43.513977,'18','payant','24h/24 7j/7','43.513977,4.990593',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('GARDANNE - Parking De La Cité Administrative','Parking De La Cité Administrative 0 GARDANNE',5.47019,43.451656,'22','payant','24h/24 7j/7','43.451656,5.47019',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-12E - Avenue Des Caillols','Avenue Des Caillols 0 MARSEILLE-12E',5.450343,43.303279,'22','payant','24h/24 7j/7','43.303279,5.450343',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-5E - Boulevard Baille','Boulevard Baille 13005 MARSEILLE-5E',5.396151,43.289353,'22','payant','24h/24 7j/7','43.289353,5.396151',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Avenue Jean Et Marcel Fontenaille','Avenue Jean Et Marcel Fontenaille 13100 AIX-EN-PROVENCE',5.461132,43.534036,'22','payant','24h/24 7j/7','43.534036,5.461132',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-11E - 270 Route Des 3Lucs  La Valentine','270 Route Des 3Lucs La Valentine 0 MARSEILLE-11E',5.481858,43.298393,'22','payant','24h/24 7j/7','43.298393,5.481858',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-7E - 85 Boulevard Charles Livon','85 Boulevard Charles Livon 0 MARSEILLE-7E',5.358481,43.291969,'22','payant','24h/24 7j/7','43.291969,5.358481',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-14E - 9 Boulevard Gay Lussac','9 Boulevard Gay Lussac 0 MARSEILLE-14E',5.374552,43.332198,'22','payant','24h/24 7j/7','43.332198,5.374552',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-8E - Place Théo Lombard','Place Théo Lombard 13008 MARSEILLE-8E',5.383026,43.27085,'22','payant','24h/24 7j/7','43.27085,5.383026',NULL,1,2);
INSERT INTO terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Avenue François Argo - Parking Annexe Mairie','Avenue François Argo - Parking Annexe Mairie 13100 AIX-EN-PROVENCE',5.354437,43.491323,'22','payant','24h/24 7j/7','43.491323,5.354437',NULL,1,2);


-- ............user.................................................................

INSERT INTO user (mail, password, isAdmin) VALUES ('EMAIL@GMAIL.com', 'password1!', false);

-- .................car......................................
INSERT INTO car (licensePlate, brand, model, connectic_id, user_id) VALUES ('NM-190-ZX', 'Peugeot', '5008', 1, 1);

-- ................reservation..............................

INSERT INTO reservations (startTime, car_id, terminal_id) VALUES ('1925-12-25 14:30:00', 1, 103);

-- ..................Profil.......................................
INSERT INTO profil (name, lastname, birthdate, car_id) VALUES ('chibrus', 'jean-michel', '32-14-1900', 1);
