-- CreateTable
CREATE TABLE `EventGuests` (
    `eventGuestId` CHAR(36) NOT NULL,
    `eventGuestName` VARCHAR(255) NOT NULL,
    `eventGuestEmail` VARCHAR(255) NULL,
    `eventGuestPhone` VARCHAR(255) NULL,
    `eventId` CHAR(36) NOT NULL,
    `eventGuestInvitationSent` BOOLEAN NOT NULL DEFAULT false,
    `eventGuestCreatedAt` DATETIME(6) NOT NULL DEFAULT (now()),
    `eventGuestUpdatedAt` DATETIME(6) NOT NULL,

    UNIQUE INDEX `EventGuests_index_0`(`eventId`, `eventGuestEmail`),
    PRIMARY KEY (`eventGuestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventTypes` (
    `eventTypeId` CHAR(36) NOT NULL,
    `eventTypeName` VARCHAR(36) NOT NULL,
    `eventTypeDescription` TEXT NULL,

    PRIMARY KEY (`eventTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Events` (
    `eventId` CHAR(36) NOT NULL,
    `eventName` VARCHAR(255) NOT NULL,
    `eventDescription` TEXT NULL,
    `eventLocation` VARCHAR(255) NULL,
    `eventDatetime` DATETIME(6) NULL,
    `eventTypeId` CHAR(36) NOT NULL,
    `userId` CHAR(36) NOT NULL,
    `eventCreatedAt` DATETIME(6) NOT NULL DEFAULT (now()),
    `eventUpdatedAt` DATETIME(6) NOT NULL,

    INDEX `eventTypeId`(`eventTypeId`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`eventId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `userId` CHAR(36) NOT NULL,
    `userName` VARCHAR(255) NOT NULL,
    `userEmail` VARCHAR(255) NOT NULL,
    `userPassword` VARCHAR(255) NOT NULL,
    `userPhone` VARCHAR(255) NOT NULL,
    `userCreatedAt` DATETIME(6) NOT NULL DEFAULT (now()),
    `userUpdatedAt` DATETIME(6) NOT NULL,

    UNIQUE INDEX `userEmail`(`userEmail`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventGuests` ADD CONSTRAINT `eventguests_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `Events`(`eventId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`eventTypeId`) REFERENCES `EventTypes`(`eventTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
