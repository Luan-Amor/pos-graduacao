import '../../assets/Tab.css'
import { useState } from "react"
import { TabContent } from "./TabContent"
import { TabItem } from "./TabItem"

export const Tabs = () => {

    const [tabData, setTabData] = useState([
        {
            id: 'tab1',
            name: 'Página 1',
            isActive: true,
            content: 'Conteúdo da página 1'
        },
        {
            id: 'tab2',
            name: 'Página 2',
            isActive: false,
            content: 'Conteúdo da página 2'
        },
        {
            id: 'tab3',
            name: 'Página 3',
            isActive: false,
            content: 'Conteúdo da página 3'
        }
    ])

    const toggleTab = (id) => {
        const items = tabData.map(data => {
            data.id === id ? data.isActive = true : data.isActive = false;
            return data;
        })
        setTabData(items)
    }

    return (
        <div>
            <ul className="list-tab">
                {tabData.map(data => <TabItem tabname={data} setActive={toggleTab} ></TabItem>)}
            </ul>
            {tabData.map(data => data.isActive && <TabContent tabContent={data.content}></TabContent>)}
        </div>
    )
}