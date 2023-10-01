-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: sql9.freesqldatabase.com	
-- Generation Time: 30-Maio-2022 às 11:00
-- Versão do servidor: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 5.6.40-0+deb8u12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql9650188`
--
CREATE DATABASE IF NOT EXISTS `sql9650188` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sql9650188`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `caixa`
--

CREATE TABLE `caixa` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `valor` decimal(5,2) NOT NULL,
  `data` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `caixaevento`
--

CREATE TABLE `caixaevento` (
  `id` int(100) NOT NULL,
  `idevento` int(100) NOT NULL,
  `valor` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `caixaevento`
--

INSERT INTO `caixaevento` (`id`, `idevento`, `valor`) VALUES
(1, 5, 100),
(2, 6, 200);

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nome` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `escoteiro`
--

CREATE TABLE `escoteiro` (
  `idescoteiro` int(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `registro` varchar(15) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `secao` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `escoteiro`
--

INSERT INTO `escoteiro` (`idescoteiro`, `nome`, `cpf`, `registro`, `telefone`, `secao`) VALUES
(1, 'Enzo', '11122233300', '6951109', '18997316782', 'Pioneiro'),
(2, 'Luana Mami', '2577769156', '1234567', '18991215481', 'touro');

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id` int(100) NOT NULL,
  `nomeevento` varchar(50) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `data` date NOT NULL,
  `resevento` varchar(50) NOT NULL,
  `num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id`, `nomeevento`, `descricao`, `rua`, `bairro`, `cidade`, `data`, `resevento`, `num`) VALUES
(3, 'Baile das Gemeas (T&T)', 'Evento Music Trap', 'Rua Mada', 'Peri City', 'São Paulo', '2022-05-17', 'Luana Selles', 220),
(5, 'Baile da D17', 'Evento Music Funk Paulista', 'Rua STOP', 'Vila Madalena', 'Sampa Meu', '2022-05-03', 'Marina Zeni', 4),
(6, 'Baile do Baludão', 'Evento Music Funk RJOTA', 'Rua Deles', 'Vila Mada', 'Rjtameo', '2022-05-26', 'Rafael', 227);

-- --------------------------------------------------------

--
-- Estrutura da tabela `inscrever`
--

CREATE TABLE `inscrever` (
  `idinscricao` int(11) NOT NULL,
  `idescoteiro` int(11) NOT NULL,
  `qtdeirmaos` int(11) NOT NULL,
  `dataatual` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `inscrever`
--

INSERT INTO `inscrever` (`idinscricao`, `idescoteiro`, `qtdeirmaos`, `dataatual`, `status`) VALUES
(2, 1, 2, '2002-04-10', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensalidade`
--

CREATE TABLE `mensalidade` (
  `id` int(11) NOT NULL,
  `valor` decimal(5,2) NOT NULL,
  `dataPag` date DEFAULT NULL,
  `dataVen` date NOT NULL,
  `idEscoteiro` int(11) NOT NULL,
  `idinscricao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `mensalidade`
--

INSERT INTO `mensalidade` (`id`, `valor`, `dataPag`, `dataVen`, `idEscoteiro`, `idinscricao`) VALUES
(0, 200.00, '2022-05-27', '2022-05-25', 1, 2),
(1, 200.00, NULL, '2022-05-22', 1, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nomeProd` varchar(15) NOT NULL,
  `descricao` varchar(30) NOT NULL,
  `precoCusto` decimal(5,2) NOT NULL,
  `precoVenda` decimal(5,2) NOT NULL,
  `qtdEstoque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nomeProd`, `descricao`, `precoCusto`, `precoVenda`, `qtdEstoque`) VALUES
(3, 'Produto', 'Descrição', 10.00, 25.00, 68),
(8, 'Caneca', 'Caneca de plastico', 5.00, 15.00, 50),
(9, 'Socorro', 'Help sos', 10.00, 20.00, 50),
(10, 'Prod', 'Descrição', 10.00, 15.00, 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caixa`
--
ALTER TABLE `caixa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `caixaevento`
--
ALTER TABLE `caixaevento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_caixaevento_evento` (`idevento`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `escoteiro`
--
ALTER TABLE `escoteiro`
  ADD PRIMARY KEY (`idescoteiro`);

--
-- Indexes for table `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inscrever`
--
ALTER TABLE `inscrever`
  ADD PRIMARY KEY (`idinscricao`),
  ADD UNIQUE KEY `idescoteiro` (`idescoteiro`),
  ADD KEY `FOREIGN` (`idescoteiro`) USING BTREE;

--
-- Indexes for table `mensalidade`
--
ALTER TABLE `mensalidade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mensalidadeEscoteiro` (`idEscoteiro`),
  ADD KEY `FOREIGN` (`idinscricao`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caixa`
--
ALTER TABLE `caixa`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `caixaevento`
--
ALTER TABLE `caixaevento`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `escoteiro`
--
ALTER TABLE `escoteiro`
  MODIFY `idescoteiro` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `inscrever`
--
ALTER TABLE `inscrever`
  MODIFY `idinscricao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `caixaevento`
--
ALTER TABLE `caixaevento`
  ADD CONSTRAINT `fk_caixaevento_evento` FOREIGN KEY (`idevento`) REFERENCES `evento` (`id`);

--
-- Limitadores para a tabela `inscrever`
--
ALTER TABLE `inscrever`
  ADD CONSTRAINT `inscrever_ibfk_1` FOREIGN KEY (`idescoteiro`) REFERENCES `escoteiro` (`idescoteiro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `mensalidade`
--
ALTER TABLE `mensalidade`
  ADD CONSTRAINT `foreign` FOREIGN KEY (`idinscricao`) REFERENCES `inscrever` (`idinscricao`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_mensalidadeEscoteiro` FOREIGN KEY (`idEscoteiro`) REFERENCES `escoteiro` (`idescoteiro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
