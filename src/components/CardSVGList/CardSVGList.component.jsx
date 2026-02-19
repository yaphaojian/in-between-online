import CardSVG from "../CardSVG/CardSVG.component"
import createDeck from "../../utils/generateDeck"


const CardSVGList = () => {
    const deck = createDeck();

    return (
        deck.map(card => 
            <CardSVG card={card}/>
        )
    )
}

export default CardSVGList;