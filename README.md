# Full-Stack-Crud-Project
This project shows the CRUD operation done on MySQL database with ExpressJS as Backend and React integration on front-end...Perform these few steps to use this project...

Steps for Database ( Open cmd promt or MySQL Command Line Client ) : 
* cmd only
  1. mysql -u root -p : This command will open MySQL client on your Command Promt and then type the corresponding password ( basically for new user it is root123 if haven't changed )...
* cmd and MySQL both ( Perform these commands if database is not created )
  
  2. create database crud; : This command will create the database named crud Here the crud database is used for performing CRUD operations...
  
  3. use crud; : This command will use the database where you can create tables...
  
  4. create table car(id int auto_increment,name varchar(50),color varchar(50),primary key(id)); : This command will create the table name car...
* Open dbconnect.js in dbconnect folder ( if the database is already created do this )
  
  5. change the password of localhost to your corresponding sql password...

Steps for Back-End :
1. npm install : Type this command to install the Back-End Dependencies...See package.json for Dependencies...
2. npm start : This command will start the server with MySQL connectivity...

Steps for Front-End :
1. cd Frontend : This command will take you to Frontend folder...
2. npm install : Type this command to install the Front-End Dependencies...See package.json for Dependencies...
3. npm start : This command will start the Front-End then take you to Home Page where you can see all the data in you database...

Enjoy Performing CRUD operations on car table in database using React in Front-End and Express in Back-End...Thank You...
