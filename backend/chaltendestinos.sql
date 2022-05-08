-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-05-2022 a las 05:38:17
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chaltendestinos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `subtitulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Excursiones en Tucumán ', 'Tafí del Valle, Quilmes y Cafayate', 'Salimos de la ciudad de Tucumán temprano en la mañana para recorrer: Ruinas de San José del Monte de los Indios Lules, Quebrada de los Sosa, el Indio,\r\nParque de los Menhires, Dique la Angostura, el Mollar, Tafí del Valle, Iglesia\r\nJesuítica la Banda, Infiernillo, Sierras Calchaquíes, Ruinas de Quilmes, Museo,\r\nCafayate y visita a las bodegas. Regreso a Tucumán u opción de dormir en\r\nCafayate para continuar a Salta contratando la excursión Cafayate- Salta que la puede encontrar en el destino Cafayate.\r\nDurante todo el recorrido se realizan paradas para caminar y sacar fotos.', 'cha2xzoje3mfm15ec7zd'),
(2, 'Lo imperdible de Jujuy', 'Serranías de Hornocal, Purmamarca, Tilcara y Humahuaca', 'Partida desde Salta rumbo norte, transitaremos por toda la Quebrada de Humahuaca: Patrimonio de la Humanidad, visitaremos el pueblo de Purmamarca, enclavada el pie del cerro de Siete Colores, pueblo que identifica a la Quebrada de Humahuaca por sus casas de adobe y calles de tierra, además de una increíble vista desde cualquier punto de Purmamarca. Continuamos por la Quebrada de Humahuaca hacia Tilcara, donde a los costados de la ruta que atraviesa la Quebrada de Humahuaca vamos viendo las montañas que cambian de color y así nace la famosa paleta del pintor muy bien conocida en la Quebrada de Humahuaca. De toda la cadena de pucaras a lo largo de toda la Quebrada de Humahuaca, en Tilcara se reconstruyo uno parcialmente y se encuentra a 1 km. del pueblo, uno de los atractivos de Tilcara junto con la plaza llena de colores por las artesanías y telares que se ofrecen. Retomamos nuestro viaje por la Quebrada de Humahuaca hacia el pueblo de Humahuaca, con aspecto colonial por sus calles angostas y empedradas con casas de adobe y farolas. Desde aquí y por un zigzagueante camino de tierra hacia la imponente puerta de Las Serranías del Hornocal. Estas magníficas formaciones geológicas, impactan no solo por sus formas y texturas sino principalmente por estar compuesta por una paleta de más de 14 colores, que evidencian su riqueza en minerales y más de 500 milones de año evolución, pasando por el Precámbrico, Cámbrico, Ordovícico, Cretácico, para luego pasar al Terciario y el Cuaternario. Final de nuestra visita y regreso a la ciudad de Salta.\r\nEste circuito se realiza en servicios regular o privado.', 'oxc7tx9iaaptai6rfmpq'),
(3, 'Hotel económico en Ushuaia', 'Austral Departamento', 'El Austral Departamento está situado en Ushuaia, a menos de 1 km de la bahía Encerrada y a 8 km del Tren del Fin del Mundo. Ofrece vistas al mar y conexión Wi-Fi gratuita.\r\nEl alojamiento dispone de TV de pantalla plana, baño privado con bidet, ducha y secador de pelo y cocina con microondas, nevera y horno. El establecimiento proporciona toallas y ropa de cama por un suplemento.\r\nEntre los lugares de interés cercanos al apartamento se incluyen el Museo Yamana, el Maritime Penal, el Museo Antarctica y el centro deportivo municipal. El aeropuerto más cercano es el aeropuerto internacional Ushuaia - Malvinas Argentinas, ubicado a 4 km del Austral Departamentos.', 'vwlpsevtohdgrxvrlu2l');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Renzo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
