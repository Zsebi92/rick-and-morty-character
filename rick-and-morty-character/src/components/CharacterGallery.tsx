import "./CharacterGallery.css";
import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return(
        <div className= "cards">
            {props.characters.map((characters) =>
                <div className="card"><CharacterCard characters = {characters}/></div>)}
            </div>
    )
}