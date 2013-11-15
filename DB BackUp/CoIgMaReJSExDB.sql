-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2013 at 12:43 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cimarejsdb`
--
CREATE DATABASE `cimarejsdb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cimarejsdb`;

-- --------------------------------------------------------

--
-- Table structure for table `examplelogin`
--

CREATE TABLE IF NOT EXISTS `examplelogin` (
  `usernames` varchar(20) COLLATE latin1_general_cs NOT NULL,
  `passwords` varchar(20) COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`usernames`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

--
-- Dumping data for table `examplelogin`
--

INSERT INTO `examplelogin` (`usernames`, `passwords`) VALUES
('Admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `exampletable`
--

CREATE TABLE IF NOT EXISTS `exampletable` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `textmsg` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- Dumping data for table `exampletable`
--

INSERT INTO `exampletable` (`id`, `textmsg`) VALUES
(31, 'Adonment'),
(35, 'Kalandras'),
(36, 'Amora');

-- --------------------------------------------------------

--
-- Table structure for table `reg_members`
--

CREATE TABLE IF NOT EXISTS `reg_members` (
  `first_name` varchar(30) NOT NULL,
  `gender_op` varchar(6) NOT NULL,
  `age_now` int(3) NOT NULL,
  `resi_addr` varchar(100) NOT NULL,
  `contact_no` int(15) NOT NULL,
  `usernames` varchar(30) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `passwords` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`usernames`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
