import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    try {
      const valueStr = JSON.stringify(value);
      localStorage.setItem(key, valueStr);
    } catch (error) {
      console.error(`Erro ao armazenar o item '${key}' no localStorage:`, error);
    }
  }

  getItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Erro ao recuperar o item '${key}' do localStorage:`, error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Erro ao remover o item '${key}' do localStorage:`, error);
    }
  }
}