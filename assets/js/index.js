'use strict';

/* Создать функцию, которая возвращает валидный url */

const PROTOCOL = 'http://';
const PROTOCOL_SAFE = 'https://';
const SERVER_IP = 'localhost';
const PORT = 3000;

function createQuery(absPath = '/home', isSafe = true ){
  return `${isSafe ? PROTOCOL_SAFE : PROTOCOL}${SERVER_IP}:${PORT}${absPath}`;
}