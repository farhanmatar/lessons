---------------CREATE TABLE--------------
CREATE TABLE products (product_id int AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(100), product_desc VARCHAR(100));

---------------insert into--------------
insert into users (id,FIRST,LAST,email,PASSWORD) VALUES (NULL,'Sara', 'Watson','sara@gmail.com','f1f2f3f4f5f6f7') ;


---------------insert into--------------
insert into orders (order_id,user_id,order_date,order_status) VALUES (NULL,'1', '2019-12-20','in progress') ;


---------------insert into--------------
insert into products (product_id,product_name,product_desc,price) VALUES (NULL,'Apple AirPods Pro', 'This is how magic sounds. and react to youear Apple devices ','278.90')


---------------UPDATE products--------------
UPDATE products set price = 1046.5 WHERE product_id = 1


--------------adding colon to the Table the name of it (price)--------------
ALTER TABLE products
ADD price FLOAT(11)

--------------conacting tables--------------
SELECT users.first_name , users.last_name, products.product_name ,products.product_desc , products.price , orders.order_date ,orders.order_status from orders, products,users where orders.product_id = products.product_id and  orders.user_id = users.id


-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 17, 2019 at 03:01 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12
​
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
​
​
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
​
--
-- Database: `mysqlDB`
--
​
-- --------------------------------------------------------
​
--
-- Table structure for table `orders`
--
​
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `order_status` varchar(20) NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
​
--
-- Dumping data for table `orders`
--
​
INSERT INTO `orders` (`order_id`, `user_id`, `order_date`, `order_status`, `product_id`) VALUES
(1, 1, '2019-12-17', 'delivered', 1),
(2, 2, '2019-12-05', 'in progress', 3),
(3, 1, '2019-12-11', 'delivered', 4);
​
-- --------------------------------------------------------
​
--
-- Table structure for table `posts`
--
​
CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
​
--
-- Dumping data for table `posts`
--
​
INSERT INTO `posts` (`id`, `title`, `body`) VALUES
(16, 'updated title', 'new body data'),
(17, 'updated title', 'new body data'),
(18, 'updated title', 'new body data'),
(19, 'updated title', 'new body data'),
(20, 'the title two ', 'this is the body of the post 2 '),
(21, 'updated title', 'new body data'),
(22, 'how to learn hacking', 'forget about it'),
(23, 'updated title', 'new body data'),
(24, 'title 8 ', 'body of title 8'),
(25, 'new title ', 'tuseday post');
​
-- --------------------------------------------------------
​
--
-- Table structure for table `products`
--
​
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
​
--
-- Dumping data for table `products`
--
​
INSERT INTO `products` (`product_id`, `product_name`, `product_desc`, `price`) VALUES
(1, 'Apple iPhone 11 Pro', 'Dual-Sim Handy LTE Smartphone 5,8 Zoll Full HD 4 GB RAM iOS 13 12 Megapixel ', 1046.5),
(2, ' Apple iPhone Xs 64GB space grau ', '\r\nLTE Smartphone 5,8 Zoll Full HD 4 GB RAM 64 GB interner Speicher 12 Megapixel 2.658 mAh Produktdatenblatt\r\n', 725.1),
(3, ' Star Wars Jedi: Fallen Order PS4 ', '\r\nStar Wars Jedi: Fallen Order PS4\r\n4 weitere Varianten, z.B.: Xbox One\r\n25 Angebote: 44,99 € – 71,72 € 0 ', 44.99),
(4, ' Apple MacBook Pro 16\" 2019 ', 'Multimedia Notebook 16 Zoll Retina 16 GB RAM macOS Catalina Akkulaufzeit 11 h ', 2439);
​
-- --------------------------------------------------------
​
--
-- Table structure for table `users`
--
​
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
​
--
-- Dumping data for table `users`
--
​
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'john', 'Doe', 'john@gmail.com', 'john123456'),
(2, 'Sara', 'Watson', 'sara@gmail.com', 'sara432432342'),
(3, 'William', 'Mars', 'will@gmail.com', 'will233$223456'),
(4, 'Kim', 'Smith', 'kim@gmail.com', 'kimo1231233');
​
--
-- Indexes for dumped tables
--
​
--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);
​
--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);
​
--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);
​
--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
​
--
-- AUTO_INCREMENT for dumped tables
--
​
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
​
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
​
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
​
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
​
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
Collapse



