import IConsole from "./Consoles/IConsole";
import PlayStation from "./Consoles/PlayStation";
import XBox from "./Consoles/XBox";
import AdvancedPlay from "./Playing/AdvancedPlay";
import Play from "./Playing/Play";

function startPlay(videoGame: IConsole){
    console.log('Aguarde...')
    const play = new Play(videoGame)
    play.playing()
    play.result()
}

function startAdvancedPlay(videoGame: IConsole){
    console.log('Aguarde...');
    const play = new AdvancedPlay(videoGame)
    play.playing()
    play.result()
    play.challenge()
}

startAdvancedPlay(new PlayStation())

startAdvancedPlay(new XBox())