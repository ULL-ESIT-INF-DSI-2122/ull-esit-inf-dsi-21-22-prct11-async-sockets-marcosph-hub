# Ejecución del programa

## **Cliente**
En una terminal:
> node dist/Client/clientNote.js [command( add | modify | delete | list | read)] [options]

Algunos ejemplos: 
* _`node dist/Client/clientNote.js read --user="User" --title="Title" `_
* _`node dist/Client/clientNote.js add --user="User" --title="Title" --content="Hello World" --color="Red"`_
* _`node dist/Client/clientNote.js delete --user="User" --title="Borrame"`_

## **Servidor**
En una terminal:
> node dist/Server/server.js