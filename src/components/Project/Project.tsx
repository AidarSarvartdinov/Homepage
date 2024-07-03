import "./Project.css"

interface Iproject {
    title: string,
    description: string,
    link: string,
}

export default function Project({title, description, link}: Iproject) {
    return (
        <>
        <div>
            <a href={link}>
                <div className="project">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
        </>
    )
}
