import { Scramble } from "@/components/Scramble";
import { Timer } from "@/components/Timer";
import { StatsWrapper } from "@/components/StatsWrapper";

export default function Home() {


    return (
        <main className="flex px-4 py-4 flex-col w-full items-center justify-between h-[100svh] bg-gray-bg gap-3">
            <div className="flex flex-col items-center justify-between h-1/2">
                <Scramble />
                <Timer />
            </div>
            <StatsWrapper />
        </main>
    );
}
