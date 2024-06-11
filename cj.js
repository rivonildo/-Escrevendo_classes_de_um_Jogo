// Definição da classe Heroi
class Heroi {
  // O construtor define as propriedades iniciais do herói: nome, idade e tipo
  constructor(nome, idade, tipo) {
    this.nome = nome;  // Nome do herói
    this.idade = idade; // Idade do herói
    this.tipo = tipo;  // Tipo do herói (mago, Guerreiro, monge, ninja, etc.)
  }

  // Método atacar define o comportamento do herói ao atacar
  atacar() {
    let ataque;  // Declara a variável 'ataque' que vai armazenar o tipo de ataque
    // Define o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'sua magia!';  // Se o tipo for 'mago', o ataque é 'usou magia'
        break;
      case 'guerreiro':
        ataque = 'espada';  // Se o tipo for 'guerreiro', o ataque é 'usou espada'
        break;
      case 'monge':
        ataque = 'artes marciais';  // Se o tipo for 'monge', o ataque é 'usou artes marciais'
        break;
      case 'ninja':
        ataque = 'shuriken';  // Se o tipo for 'ninja', o ataque é 'usou shuriken'
        break;
      default:
        ataque = 'seu poder';  // Para qualquer outro tipo, o ataque é 'usou seu poder'
    }
    // Exibe no console o tipo de ataque realizado pelo herói
    console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}`);
  }
}

// Instanciando (criando) um herói com nome 'Herói', idade 30, e tipo 'guerreiro'
const meuHeroi = new Heroi('R.AZEVEDO', 35, 'mago' );

// Chamando o método atacar do objeto 'meuHeroi'
meuHeroi.atacar();  // Exibe: "O guerreiro Herói atacou usando espada"

