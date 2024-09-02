'use client';

import { codeToHtml } from "shiki";
import React, {useEffect, useState} from "react";

export default function ShikiViewer() {
    const [html, setHtml] = useState("");
    useEffect(() => {
        (async () => {
            const html = await codeToHtml("import { codeToHtml } from 'shiki';", {
                lang: "javascript",
                theme: "dark-plus",
            });
            setHtml(html);
        })();
    })

    return <div dangerouslySetInnerHTML={{__html: html}}/>
}
