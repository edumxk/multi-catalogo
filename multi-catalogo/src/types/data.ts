// Define a estrutura para cada objeto Animal
export interface Animal {
    id: string;
    tipo: 'animal'; // Campo literal para identificar o tipo
    nome: string;
    especie: string;
    imagem: string;
  }
  
  // Define a estrutura para cada objeto Livro
  export interface Livro {
    id: string;
    tipo: 'livro'; // Campo literal para identificar o tipo
    titulo: string;
    autor: string;
    imagem: string;
  }
  
  // Define a estrutura para cada objeto Pessoa
  export interface Pessoa {
    id: string;
    tipo: 'pessoa'; // Campo literal para identificar o tipo
    nome: string;
    idade: number;
    profissao: string;
    imagem: string;
  }

  export type DataItem = Animal | Livro | Pessoa;