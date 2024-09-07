const Project = ({data}) => {
  return (
  <article className="project">
    <div className="image"><img src={data.image} alt={data.title} />
    </div>
    <div className="content">
        <h3>{data.title}</h3>
        <ul>
            {data.tech.map((tech) => {
                <li key={tech}>{tech}</li>
            })}
        </ul>
        <p>{data.description}</p>
    </div>
  </article>
  )
}
 

export default Project
