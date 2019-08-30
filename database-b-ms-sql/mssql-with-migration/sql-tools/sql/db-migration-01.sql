USE [master]
GO

CREATE DATABASE [example-db];
GO

USE [example-db]
GO

CREATE TABLE [dbo].[Example] (
    [Id]            BIGINT              IDENTITY (1, 1) NOT NULL,
    [Name]          NVARCHAR (50)       NULL,
    [Description]   TEXT                NOT NULL,    
    CONSTRAINT [PK_dbo.Example]         PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

INSERT INTO [dbo].[Example] VALUES('Example 1', 'This is the first example in the mssql database.');
INSERT INTO [dbo].[Example] VALUES('Example 2', 'This is the second example in the mssql database.');
INSERT INTO [dbo].[Example] VALUES('Example 3', 'This is the third example in the mssql database.');
GO
