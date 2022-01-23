CREATE DATABASE ucode_web;
CREATE USER 'pmarchenko'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'pmarchenko'@'localhost';
