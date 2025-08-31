import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {

    return (
        <section className={styles.section} id="About">
            <h2 className={styles.title}>About</h2>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.content}> 
                        <ul className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>Education:</h3>
                                    <p>
                                        I recently graduated from Newcastle Univsersity in the UK, achieving a 
                                        first-class honours degree and dissertation.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>Skill Set:</h3>
                                    <p>
                                        I have worked with a range of languages, tools, and frameworks:
                                        Python, Java, C, CSS, HTML, React, JavaScript/XML, Flask, Figma, Microsoft Office, Visual Studio Code, Github, Claude Code, ChatGBT, Ubuntu
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>What have I been doing?:</h3>
                                    <p>
                                        Most recently, I built an internal AI assistant tool for a multidisciplinary clinic. Using modern AI technology, the assistant enables staff to instantly query internal procedures, practitioner info, and workflows, streamlining onboarding, internal referals and improving consistency.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.imageCard}>
                    <img
                        src={getImageUrl("about/aboutImage.png")}
                        alt="About Image"
                        className={styles.aboutImage}
                    />
                </div>
            </div>
        </section>
    );
}