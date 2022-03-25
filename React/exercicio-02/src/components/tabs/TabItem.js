export const TabItem = ({tabname, setActive}) => {


    return (
        <li 
            className={tabname.isActive ? "tab-item tab-active": "tab-item"}
            onClick={() => setActive(tabname.id)}
        >
            {tabname.name}
        </li>
    )
}
