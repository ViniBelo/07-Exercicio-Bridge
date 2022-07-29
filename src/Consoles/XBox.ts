import IConsole from "./IConsole";

export default class XBox implements IConsole{
    configuraGame(): void {
        this.authToken()
        console.log('XBox: Configurando Jogo.')
    }
    authToken(): void {
        console.log('XBox: Token Gerado.')
    }

}