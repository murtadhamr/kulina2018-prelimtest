CREATE TABLE `user_review` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `order_id` int(255) NOT NULL,
  `product_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `rating` float NOT NULL,
   CHECK (rating >= 1 AND rating <= 5)
  `review` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
)