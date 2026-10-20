export default function SolicitudCard({ id, titulo, prioridad, estado, onResolver }) {
    return (
        <article>
            <h3>{titulo}</h3>
            <p>Prioridad: {prioridad}</p>
            <p>Estado: {estado}</p>
            {estado !== 'Resuelta' && (
                <button onClick={() => onResolver(id)}>Resolver</button>
            )}
        </article>
    )
}