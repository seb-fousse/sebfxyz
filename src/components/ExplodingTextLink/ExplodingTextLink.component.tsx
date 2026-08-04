import styles from './ExplodingTextLink.module.css'

// Reworking of this effect
// https://www.youtube.com/watch?v=owpaafxvkjU

interface Props {
    text: string;
    href: string;
}

// Scatters the letters by a stable amount between -5000ms and 0ms. This is
// hashed rather than random so the server and client render the same delays —
// Math.random() here produced a hydration mismatch on every letter.
const scatterDelay = (text: string, index: number) => {
    let hash = (index + 1) * 2654435761;
    for (let i = 0; i < text.length; ++i) {
        hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
    }
    return -((hash >>> 0) % 5001);
};

export default function ExplodingTextLink({ text, href }: Props) {

    const letters = text.split(""); // Split text into array of characteres
    const lettersAndDelay = []

    // Push an object to lettersAndDelay with a letter, scattered delay, and fixed delay
    for (let i = 0; i < letters.length; ++i) {
        const rd = `${scatterDelay(text, i)}ms`
        const fd = `${i * 1000 }ms`
        lettersAndDelay.push({letter: letters[i], randomDelay: rd, fixedDelay: fd});
    }

    // Build out JSX for each letter in the HomeMenuItem
    const letterItems = lettersAndDelay.map((item) => (
        <span className="outer" key={item.fixedDelay}>
            <span className="inner" style={{animationDelay: item.randomDelay}}>
                <span className="letter" style={{animationDelay: item.fixedDelay}}>{item.letter}</span>
            </span>
        </span>
        )
    );

    return (
        <div className="font-medium text-5xl">
            <div className={styles.option}>
                <a className={styles.fancy} href={href}>
                    {letterItems}
                </a>
            </div>
        </div>
    );
}