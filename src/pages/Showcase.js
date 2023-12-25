import styles from './showcase.module.css'

export default function Showcase() {
    const showCases = [
        {
            "title": "Bear bread classifier",
            "description": "Bear bread classifier",
            "image": "https://via.placeholder.com/150",
            "link": "https://huggingface.co/spaces/PhucBui/demo"
        }
    ]
    return (
        <>
            <h1>Show case here</h1>
            <div className={styles.showcase}>
                {showCases.map((showCase, index) => (
                    <div key={index}>
                        <h3>{showCase.title}</h3>
                        <p>{showCase.description}</p>
                        <img src={showCase.image} alt={showCase.title} />
                        <a href={showCase.link}>Link</a>
                    </div>
                ))}
            </div>
        </>
    )
}