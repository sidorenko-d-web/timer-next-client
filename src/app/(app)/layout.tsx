import { Navigate } from "@/components/navigate/Navigate";


export default function  AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex overflow-hidden">
            <Navigate />
            {children}
        </div>
    );
}
