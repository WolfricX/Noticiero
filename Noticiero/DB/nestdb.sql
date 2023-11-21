-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2023 a las 14:25:11
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia_profile`
--

CREATE TABLE `noticia_profile` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `authStrategy` varchar(255) DEFAULT NULL,
  `profileId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `authStrategy`, `profileId`) VALUES
(2, 'Rochita', 'Rochitas23', '2023-10-09 07:59:54', NULL, NULL),
(3, 'Rochitasss', 'R', '2023-10-09 08:00:45', NULL, NULL),
(7, 'jose', 'jose22', '2023-10-19 07:46:40', NULL, NULL),
(9, 'RochaCauich', 'Gy', '2023-10-25 21:49:15', NULL, NULL),
(11, 'Probando pr2', 'contras', '2023-11-10 00:47:29', NULL, NULL),
(14, 'Juan Salmeron', '123456', '2023-11-17 18:42:15', NULL, NULL),
(15, 'Daniel', 'Daniel', '2023-11-21 03:33:51', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indices de la tabla `noticia_profile`
--
ALTER TABLE `noticia_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  ADD UNIQUE KEY `REL_b1bda35cdb9a2c1b777f5541d8` (`profileId`);

--
-- Indices de la tabla `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `noticia_profile`
--
ALTER TABLE `noticia_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `FK_fe75f4f00c2f792cc7b9f5ace4b` FOREIGN KEY (`noticiaprofileId`) REFERENCES `noticia_profile` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_b1bda35cdb9a2c1b777f5541d87` FOREIGN KEY (`profileId`) REFERENCES `user_profile` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
