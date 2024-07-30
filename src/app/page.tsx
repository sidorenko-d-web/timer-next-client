import { Scramble } from "@/components/timer/scramble/Scramble";
import { Timer } from "@/components/timer/Timer";
import { StatsWrapper } from "../components/timer/statistics/StatsWrapper";
import { App } from "./(app)/page";
import AppLayout from "./(app)/layout";

export default function Home() {
    return (
        <AppLayout children={<App />}/>
    );
}
