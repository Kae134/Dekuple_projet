import { redirect } from 'next/navigation'
import NavBarv2 from '../components/navbar/NavBar';
import Notifications from '../components/notifications/Notifications'
import CardGraph from '../components/cardGraph/CardGraph'
import Drag from '../components/dragAndDrop/Drag'

export default async function DekupleApp() {
    return (
        // redirect('/Dekuple-app/accueil')
        <div>
            {/* <CardGraph color="#FF3125" />
            <CardGraph color="#4CAF50" />
            <CardGraph color="#2196F3" /> */}
            <Drag />
        </div>
    )
}