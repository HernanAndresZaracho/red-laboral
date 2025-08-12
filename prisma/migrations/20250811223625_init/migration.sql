-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "photoUrl" TEXT,
    "role" TEXT NOT NULL DEFAULT 'APPLICANT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ApplicantProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "cvUrl" TEXT,
    "bio" TEXT,
    "experience" TEXT,
    "education" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ApplicantProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "applicantProfileId" INTEGER NOT NULL,
    CONSTRAINT "Skill_applicantProfileId_fkey" FOREIGN KEY ("applicantProfileId") REFERENCES "ApplicantProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmployerProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyBio" TEXT,
    "websiteUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EmployerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "employerId" INTEGER NOT NULL,
    CONSTRAINT "JobOffer_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicantId" INTEGER NOT NULL,
    "jobOfferId" INTEGER NOT NULL,
    CONSTRAINT "Application_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Application_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Report" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reporterId" INTEGER NOT NULL,
    "reportedId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    CONSTRAINT "Report_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Report_reportedId_fkey" FOREIGN KEY ("reportedId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicantProfile_userId_key" ON "ApplicantProfile"("userId");

-- CreateIndex
CREATE INDEX "Skill_applicantProfileId_idx" ON "Skill"("applicantProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployerProfile_userId_key" ON "EmployerProfile"("userId");

-- CreateIndex
CREATE INDEX "JobOffer_employerId_idx" ON "JobOffer"("employerId");

-- CreateIndex
CREATE INDEX "Application_jobOfferId_idx" ON "Application"("jobOfferId");

-- CreateIndex
CREATE INDEX "Application_applicantId_idx" ON "Application"("applicantId");
