## ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
* Me pareció más cómodo usar class porque la sintaxis es más clara y parecida a otros lenguajes de programación orientados a objetos. En cambio, trabajar con funciones constructoras y el uso explícito de prototype parece llevar más pasos y puede resultar confuso, especialmente al principio. Las clases son más modernas y hacen que el código sea más fácil de leer y mantener.

## ¿Cuáles son las ventajas de usar getters y setters?
* Son útiles para acceder a los atributos y propiedades que son privados en el cuerpo de la clase para ser utilizados en metodos publicos con los que accederas por fuera.

## ¿Qué problemas pueden surgir al modificar prototipos nativos como String?
* Modificar prototipos nativos puede causar conflictos, errores futuros, problemas de compatibilidad, rendimiento y dificultar el mantenimiento del código. Mejor evitarlo.

## Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?
* Asignar directamente es puntual y seguro. Object.assign permite copiar varios métodos, pero puede sobrescribir si no se controla.

