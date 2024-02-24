import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initDatabase();
  }

  private async initDatabase() {
    try {
      this.database = await this.sqlite.create({
        name: 'data.db',
        location: 'default'
      });

      // Punto 1: Crear tabla si no existe
      await this.createTableIfNotExists();

    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  private async createTableIfNotExists() {
    const createQuery = `
      CREATE TABLE IF NOT EXISTS avisos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        descripcion TEXT,
        fecha TEXT
      )
    `;
    await this.database.executeSql(createQuery, []);
  }

  async insertAviso(titulo: string, descripcion: string, fecha: string) {
    const insertQuery = `
      INSERT INTO avisos (titulo, descripcion, fecha)
      VALUES (?, ?, ?)
    `;
    await this.database.executeSql(insertQuery, [titulo, descripcion, fecha]);
  }

  // Punto 3: Obtener todos los avisos de la tabla
  async getAllAvisos() {
    const selectQuery = `
      SELECT * FROM avisos
    `;
    const result = await this.database.executeSql(selectQuery, []);
    const avisos = [];
    for (let i = 0; i < result.rows.length; i++) {
      avisos.push(result.rows.item(i));
    }
    return avisos;
  }
}
