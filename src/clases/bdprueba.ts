import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { Cancion } from "./cancion";
import * as index from "../index";

export interface SchemaInterface {
  songs: Cancion[]
}

const db: lowdb.LowdbSync<SchemaInterface> = lowdb(new FileSync("BDCanciones.json"));
db.set("Cancion",index.canciones).write();
