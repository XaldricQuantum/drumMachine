
import { useRef, useEffect } from "react"



function PadContainer(props) {
    const audioRefs = useRef([])
    const bank1 = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }]
    

    const bank2 = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }]
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            const index = drums.findIndex(drum => drum.keyTrigger === event.key.toUpperCase());
            console.log(`pad -> useEffect ${props.powerSwitch}`);
            
            handleClick(index);
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [props]);

    const handleClick = (index) => {
        // console.log(audioRefs.current[index])
        // console.log(drumDivs);
        console.log(`handle click pops.power ${props.powerSwitch}`);
        
        console.log(`handle click ${props.powerSwitch & audioRefs.current[index]}`);
        
        
        props.updateDisplayText(drums[index].id)
        if (props.powerSwitch ) {
            audioRefs.current[index].play()

        }
        
    }

    let drums = props.bankSwitch ? bank2 : bank1
    const drumDivs = drums.map((drumDiv, index) => <div className="drum-pad" 
                                id={drumDiv.id} key={index} 
                                onClick={() => handleClick(index)}>{drumDiv.keyTrigger}
                                    <audio className="clip" ref={el => audioRefs.current[index] = el} src={drumDiv.url} id={drumDiv.keyTrigger}></audio>
                                </div>)
    


    return (
        <div className="pad-container">
            {drumDivs}
        </div>

    )
}

export default PadContainer