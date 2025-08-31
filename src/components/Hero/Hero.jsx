import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroVideo from "../../../assets/hero/heroVid.webm";

export const Hero = () => {
    const copyToClipboard = (event) => {
        event.preventDefault(); // Prevent the link from navigating away
        const email = "portessalex@outlook.com";
        navigator.clipboard.writeText(email)
            .then(() => { 
                alert("Email copied to clipboard!");
            })
            .catch((error) => {
                console.error("Failed to copy email:", error);
            });
    };
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Alex!</h1>
                <p className={styles.description}>
                    I’m a software engineer who recently spent over a year in Vancouver, applying my skills in real-world environments to provide technical initiatives and support. During this time, I worked in range of areas, from creating an AI assistant to streamline clinical operations, to building and optimising websites with a strong focus on SEO. These experiences strengthened my ability to translate technical knowledge into practical solutions that drive value. Now back in the UK, I’m ready to bring that expertise into a software engineering role where I can continue to learn, grow, and contribute to impactful projects.
                </p>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
        
    )
};

