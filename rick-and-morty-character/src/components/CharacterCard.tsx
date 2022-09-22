import "./CharacterCard.css";
import {Character} from "../model/Character";

type CharacterCardProps = {
    characters: Character;
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className="character-card">

            <h3>{props.characters.name} </h3>
            <img src={props.characters.image}/>
            <p>{props.characters.status}</p>

        </div>
    )
}



