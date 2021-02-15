/*  CREATE DATABASE toDoList;*/
CREATE TABLE users (id int AUTO_INCREMENT  PRIMARY KEY, username VARCHAR(60), firstname VARCHAR(60), lastname VARCHAR(60));
CREATE TABLE lists (id int AUTO_INCREMENT PRIMARY KEY, listname VARCHAR(60), userid int);
CREATE TABLE tasks (id int AUTO_INCREMENT PRIMARY KEY , taskname VARCHAR(60), listid int);