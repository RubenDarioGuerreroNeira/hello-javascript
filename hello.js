

class Forma {
  area() {
    throw new Error("Método abstracto, debe ser implementado en subclases");
  }
}

class Rectangulo extends Forma {
  constructor(ancho, alto) {
    super();
    this.ancho = ancho;
    this.alto
  }
}

 

/*
 EJERCICIO:
 Explora el "Principio SOLID de Sustitución de Liskov (Liskov Substitution Principle, LSP)"
y crea un ejemplo simple donde se muestre su funcionamiento
 de forma correcta e incorrecta.

 DIFICULTAD EXTRA (opcional):
 Crea una jerarquía de vehículos. Todos ellos deben poder acelerar y frenar, así como
 cumplir el LSP.
 Instrucciones:
 Crea la clase Vehículo.
 2. Añade tres subclases de Vehículo.
Implementa las operaciones "acelerar" y "frenar" como corresponda.
  Desarrolla un código que compruebe que se cumple el LSP.
 */

class Vehiculo {
  constructor() {
    this.velocidad = 0;
  }

  acelerar(incremento) {
    this.velocidad += incremento;
  }

  frenar(decremento) {
    this.velocidad -= decremento;
    if (this.velocidad < 0) {
      this.velocidad = 0;
    }
  }
}

class Coche extends Vehiculo {
  constructor() {
    super();
    this.tipo = "Coche";
  }

  // Puede tener métodos específicos de coches, como abrirPuertas()
}

class Moto extends Vehiculo {
  constructor() {
    super();
    this.tipo = "Moto";
  }

  // Puede tener métodos específicos de motos, como levantarCaballete()
}

class Bicicleta extends Vehiculo {
  constructor() {
    super();
    this.tipo = "Bicicleta";
  }

  // Puede tener métodos específicos de bicicletas, como cambiarMarcha()
}

// Función que usa vehículos de forma genérica
function usarVehiculo(vehiculo) {
  console.log(`Usando un ${vehiculo.tipo}`);
  vehiculo.acelerar(20);
  console.log(`Velocidad actual: ${vehiculo.velocidad}`);
  vehiculo.frenar(10);
  console.log(`Velocidad después de frenar: ${vehiculo.velocidad}`);
}

// Creamos instancias de diferentes vehículos
const miCoche = new Coche('camion');
const miMoto = new Moto();
const miBici = new Bicicleta();

// Usamos los vehículos sin importar su tipo específico
usarVehiculo(miCoche);
usarVehiculo(miMoto);
usarVehiculo(miBici);


