import IConsole from "./IConsole";

export default class PlayStation implements IConsole{

    constructor(){
        this.configuraGame()
        console.log('PlayStation Conectado.')
    }

    configuraGame(): void {
        this.authToken()
        console.log('PlayStation: Configurando Jogo.')
    }
    authToken(): void {
        console.log('PlayStation: Token Gerado.')
    }

}