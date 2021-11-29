-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 24 nov. 2021 à 14:17
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `plagesDeFrance`
--

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `numDepartement` int(11) NOT NULL,
  `nomResponsable` varchar(255) NOT NULL,
  `prenomResponsable` varchar(255) NOT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `telephoneResponsable` varchar(255) DEFAULT NULL,
  `mailResponsable` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `plage`
--

CREATE TABLE `plage` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `longueur` int(255) DEFAULT NULL,
  `naturePlage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `plage`
--

INSERT INTO `plage` (`id`, `nom`, `longueur`, `naturePlage`) VALUES
(1, 'antibes plages', 5000, 'sable'),
(2, 'PLAGE DU MIDI À CANNES', 5000, 'sables '),
(3, 'PLAGE DE LA GAROUPE À ANTIBES', 2222, 'galets'),
(4, 'PLAGE DU CHÂTEAU À MANDELIEU', 1000, 'sable fin');

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `numero` int(3) NOT NULL,
  `nomRegion` varchar(255) NOT NULL,
  `idResponsable` int(255) NOT NULL,
  `numDepartement` int(255) NOT NULL,
  `codePostal` mediumint(5) UNSIGNED ZEROFILL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `responsableRegion`
--

CREATE TABLE `responsableRegion` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `codePostal` mediumint(5) UNSIGNED ZEROFILL NOT NULL,
  `nomVille` varchar(255) NOT NULL,
  `nombreAnTouristes` int(11) DEFAULT NULL,
  `idPlage` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`codePostal`, `nomVille`, `nombreAnTouristes`, `idPlage`) VALUES
(06620, 'antibes', 100000, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`numDepartement`);

--
-- Index pour la table `plage`
--
ALTER TABLE `plage`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`numero`),
  ADD KEY `region_fk0` (`idResponsable`),
  ADD KEY `region_fk1` (`numDepartement`),
  ADD KEY `region_fk2` (`codePostal`);

--
-- Index pour la table `responsableRegion`
--
ALTER TABLE `responsableRegion`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`codePostal`),
  ADD KEY `ville_fk0` (`idPlage`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `plage`
--
ALTER TABLE `plage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `responsableRegion`
--
ALTER TABLE `responsableRegion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `region_fk0` FOREIGN KEY (`idResponsable`) REFERENCES `responsableRegion` (`id`),
  ADD CONSTRAINT `region_fk1` FOREIGN KEY (`numDepartement`) REFERENCES `departement` (`numDepartement`),
  ADD CONSTRAINT `region_fk2` FOREIGN KEY (`codePostal`) REFERENCES `ville` (`codePostal`);

--
-- Contraintes pour la table `ville`
--
ALTER TABLE `ville`
  ADD CONSTRAINT `ville_fk0` FOREIGN KEY (`idPlage`) REFERENCES `plage` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
