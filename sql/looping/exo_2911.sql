CREATE TABLE professeurs(
   ID_prof COUNTER,
   ID_matiere COUNTER,
   ID_classe COUNTER,
   nom_professeur VARCHAR(255) NOT NULL,
   prenom_professeur VARCHAR(255) NOT NULL,
   telephone VARCHAR(50),
   adresse VARCHAR(255),
   PRIMARY KEY(ID_prof, ID_matiere, ID_classe)
);

CREATE TABLE classes(
   ID_classe COUNTER,
   ID_professeur COUNTER,
   id_matiere COUNTER,
   ID_salleCours COUNTER,
   nom_classe COUNTER NOT NULL,
   PRIMARY KEY(ID_classe, ID_professeur, id_matiere, ID_salleCours)
);

CREATE TABLE matiereS(
   ID_matiere COUNTER,
   ID_eleve COUNTER,
   ID_classe INT,
   ID_professeur INT,
   denomination_matiere VARCHAR(255) NOT NULL,
   nb_heures INT NOT NULL,
   note INT,
   ID_prof INT NOT NULL,
   ID_matiere_1 INT NOT NULL,
   ID_classe_1 INT NOT NULL,
   PRIMARY KEY(ID_matiere, ID_eleve, ID_classe, ID_professeur),
   FOREIGN KEY(ID_prof, ID_matiere_1, ID_classe_1) REFERENCES professeurs(ID_prof, ID_matiere, ID_classe)
);

CREATE TABLE eleves(
   ID_eleves COUNTER,
   ID_classes COUNTER,
   ID_matière COUNTER,
   nom_eleve VARCHAR(255) NOT NULL,
   prenom_eleve VARCHAR(255) NOT NULL,
   date_naissance DATE,
   responsable_eleve VARCHAR(255) NOT NULL,
   adresse VARCHAR(255) NOT NULL,
   telephone VARCHAR(10),
   ID_classe INT NOT NULL,
   ID_professeur INT NOT NULL,
   id_matiere INT NOT NULL,
   ID_salleCours INT NOT NULL,
   PRIMARY KEY(ID_eleves, ID_classes, ID_matière),
   FOREIGN KEY(ID_classe, ID_professeur, id_matiere, ID_salleCours) REFERENCES classes(ID_classe, ID_professeur, id_matiere, ID_salleCours)
);

CREATE TABLE cours(
   ID_prof INT,
   ID_matiere INT,
   ID_classe INT,
   ID_classe_1 INT,
   ID_professeur INT,
   id_matiere_1 INT,
   ID_salleCours INT,
   PRIMARY KEY(ID_prof, ID_matiere, ID_classe, ID_classe_1, ID_professeur, id_matiere_1, ID_salleCours),
   FOREIGN KEY(ID_prof, ID_matiere, ID_classe) REFERENCES professeurs(ID_prof, ID_matiere, ID_classe),
   FOREIGN KEY(ID_classe_1, ID_professeur, id_matiere_1, ID_salleCours) REFERENCES classes(ID_classe, ID_professeur, id_matiere, ID_salleCours)
);
