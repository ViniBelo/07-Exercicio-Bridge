import IConsole from "./IConsole";

export default class XBox implements IConsole{

    constructor(){
        this.configuraGame()
        console.log('XBox Conectado.')
    }

    configuraGame(): void {
        this.authToken()
        console.log('XBox: Configurando Jogo.')
    }
    authToken(): void {
        console.log('XBox: Token Gerado.')
    }

}