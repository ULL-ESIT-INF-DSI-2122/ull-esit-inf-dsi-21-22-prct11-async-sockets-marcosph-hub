import * as net from 'net';
import { watchFile } from 'fs';

net.createServer((connecion) => {

}).listen(60300,() => {
  console.log("Waiting for clients to connect");
});