CREATE DATABASE IF NOT EXISTS spring;
CREATE USER IF NOT EXISTS 'springuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON spring.* TO 'springuser'@'%';
