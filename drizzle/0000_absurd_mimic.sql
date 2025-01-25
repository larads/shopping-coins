CREATE TABLE `products` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` real,
	`quantity` integer,
	`image` text,
	`category` text,
	`createdAt` text NOT NULL
);
