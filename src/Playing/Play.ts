import IConsole from "../Consoles/IConsole";
import IPlaying from "./IPlaying";

export default class Play implements IPlaying{

    constructor(private console: IConsole){}

    playing(): void {
        console.log('Iniciando Partida.')
    }
    result(): void {
        console.log('Partida Iniciada.')
    }

}