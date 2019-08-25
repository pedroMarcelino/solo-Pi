create database tsi_pi;
use tsi_pi;

create table user (
    cd_user int primary key auto_increment,
    nm_user varchar(60) not null,
    email varchar(60) not null unique,
    password char(32) not null
);