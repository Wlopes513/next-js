import { useState } from "react";
import Client from "../core/client";
import Entry from "./entry";

interface FormsProps {
    client: Client,
}

export default function Forms(props: FormsProps) {
    const { client } = props;
    const id = client?.id;
    const [name, setName] = useState(client?.name ?? '');
    const [age, setAge] = useState(client?.age ?? 0);

    return (
        <div>
            {id && (
                <Entry text="Código" value={id} readOnly />
            )}
            <Entry text="Nome" value={name} changeValue={setName} />
            <Entry text="Idade" type="number" value={age} changeValue={setAge} />
        </div>
    )
}