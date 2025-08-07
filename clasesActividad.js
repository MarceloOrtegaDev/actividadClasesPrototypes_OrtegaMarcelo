class cuentaBancaria{
    titular;
    #saldoInicial;
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldoInicial = saldoInicial;
    }

    set DepositarSaldo(nuevoSaldo){
        if (nuevoSaldo < 0) {
            console.log("El monto a depositar debe ser positivo.");
            return;
        }
        this.#saldoInicial += nuevoSaldo;
        console.log(`Se ha depositado $${nuevoSaldo} en la cuenta de ${this.titular} por lo tanto tu nuevo monto es $${this.#saldoInicial}`);
    }

    set extraer(monto){

        if (monto > this.#saldoInicial) {
            console.log(`No se puede extraer $${monto} de la cuenta de ${this.titular} porque el saldo es insuficiente.`);
            return;
        }
        this.#saldoInicial -= monto;

        console.log(`Se ha extraído $${monto} de la cuenta de ${this.titular} por lo tanto tu nuevo monto es $${this.#saldoInicial}`);
    }

    get getConsultarSaldo(){
        console.log(`El saldo actual de la cuenta de ${this.titular} es ${this.#saldoInicial}`);
    }

}

const cuenta1 = new cuentaBancaria("Marcelo", 1000);

console.log(cuenta1);

cuenta1.getConsultarSaldo
cuenta1.extraer = 4;
cuenta1.getConsultarSaldo
cuenta1.DepositarSaldo = 50;
cuenta1.getConsultarSaldo;

