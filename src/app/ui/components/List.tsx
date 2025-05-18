export default function List({list}: {list: string[]}) {
    return(
        <ul>
            {
                list.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}