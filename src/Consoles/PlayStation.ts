import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    configuraGame(): void {
        this.authToken()
        console.log('PlayStation: Configurando Jogo.')
    }
    authToken(): void {
        console.log('PlayStation: Token Gerado.')
    }

}