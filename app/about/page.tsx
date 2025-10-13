import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";


function About(){
    return (
        <main>
            <h1>Ich spreche ein bisschen deutsch!</h1>
            <Link href="/">Go to home</Link>
        </main>
    )
}


export default About;