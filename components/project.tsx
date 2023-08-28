
export default function Project() {
  return (
    <section className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl px-4">Project</h3>
      <div className="flex flex-col space-y-2">
        {
          [...Array(3)].map((_, i) => (
            <div className="px-4" key={i}>
              <ProjectCard />
            </div>
          ))
        }
      </div>


    </section>
  )
}

function ProjectCard() {
  return (
    <div>
      project card
    </div>
  )
}