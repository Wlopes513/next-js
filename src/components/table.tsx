import Client from "../core/client"

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {
    const { clients } = props;

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                </tr>
            </thead>
            <tbody>
                {clients?.map((client, i) => (
                    <tr key={i} className={i % 2 === 0  ? 'bg-purple-200' : 'bg-purple-100'}>
                        <td className="text-left p-4">{client.id}</td>
                        <td className="text-left p-4">{client.name}</td>
                        <td className="text-left p-4">{client.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}