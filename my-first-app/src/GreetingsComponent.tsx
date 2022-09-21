type GreetingsComponentProps = {
    name : string;
}

export default function GreetingsComponent(props: GreetingsComponentProps){
    return (
        <div>
            <h1>Ai Gude wie {props.name} ?</h1>
        </div>
    )
}





