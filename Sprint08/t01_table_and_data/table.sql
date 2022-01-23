USE ucode_web;

CREATE TABLE IF NOT EXISTS heroes
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE NOT NULL,
    description VARCHAR(255) NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    race_id VARCHAR(30) NOT NULL
);