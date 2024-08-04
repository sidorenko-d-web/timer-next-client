import { App } from "./(app)/page";
import AppLayout from "./(app)/layout";

export default function Home() {
    return (
        <AppLayout children={<App />}/>
    );
}
