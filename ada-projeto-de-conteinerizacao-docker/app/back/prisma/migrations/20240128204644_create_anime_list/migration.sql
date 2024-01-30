-- CreateTable
CREATE TABLE `anime` (
    `id` INTEGER NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `title_japanese` VARCHAR(255) NOT NULL,
    `episodes` INTEGER NULL,
    `status` VARCHAR(191) NOT NULL,
    `score` DOUBLE NOT NULL,
    `synopsis` TEXT NOT NULL,
    `year` INTEGER NULL,
    `producer` VARCHAR(191) NOT NULL,
    `studio` VARCHAR(191) NOT NULL,
    `genres` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
