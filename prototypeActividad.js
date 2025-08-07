function cuentaBancaria(titular, saldoInicial){
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}

const cuentaBancariaPrototype = {
    depositar(nuevoSaldo){
        console.log(`Se ha depositado $${nuevoSaldo} en la cuenta de ${this.titular} por lo tanto tu nuevo monto es $${this.saldoInicial + nuevoSaldo}`);
    },

    extraer(monto){
        console.log(`Se ha extraído $${monto} de la cuenta de ${this.titular} por lo tanto tu nuevo monto es $${this.saldoInicial - monto}`);
    },

    consultarSaldo(){
        console.log(`El saldo actual de la cuenta de ${this.titular} es ${this.saldoInicial}`);
    }
}

Object.assign(cuentaBancaria.prototype, cuentaBancariaPrototype);

const cuenta1 = new cuentaBancaria("Marcelo", 1000);

console.log(cuenta1);

cuenta1.extraer(20)
cuenta1.depositar(100);
cuenta1.consultarSaldo();

