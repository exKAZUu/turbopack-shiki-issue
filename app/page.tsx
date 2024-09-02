import dynamic from "next/dynamic";

export default function Home() {
    const ShikiViewer = dynamic(
        () => import("./ShikiViewer"),
        {ssr: false}
    );
    return <ShikiViewer/>;
}
