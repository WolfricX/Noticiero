-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2023 a las 14:26:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nestdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `authStrategy` varchar(255) DEFAULT NULL,
  `noticiaprofileId` int(11) DEFAULT NULL,
  `resumen` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `contenido`, `createdAt`, `authStrategy`, `noticiaprofileId`, `resumen`, `imagen`) VALUES
(1, 'a', 'a', '2023-11-10 04:11:02', NULL, NULL, '', ''),
(10, 'Gran Concierto en Mexico', 'El dia Sabado 18 de Junio en el estado de Merida se vivio un increible concierto en el auditorio GNP con un total de 15000 asistentes', '2023-11-21 04:58:43', NULL, NULL, 'Increible Concierto el que se vivio el dia Sabado 18 de Junio en Merida', 'https://www.infobae.com/new-resizer/lFzVePpPIz1CiGnymXrKJaUvI2U=/arc-anglerfish-arc2-prod-infobae/public/P5OGIVXYNRBCXJHTNHUVWU7NHU.jpg'),
(11, '¿El Mejor Presidente de Mexico?', 'Andres Manuel', '2023-11-21 05:38:46', NULL, NULL, 'En Redes Sociales se presume que Andres Manuel Lopez Obrador podria ser el mejor presidente que haya tenido México dentro de hace muchos años.', 'https://c.files.bbci.co.uk/D911/production/_118796555_gettyimages-1316476073.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_28e70bb68b6fd6dbf29de5874f` (`titulo`),
  ADD UNIQUE KEY `REL_fe75f4f00c2f792cc7b9f5ace4` (`noticiaprofileId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `FK_fe75f4f00c2f792cc7b9f5ace4b` FOREIGN KEY (`noticiaprofileId`) REFERENCES `noticia_profile` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
