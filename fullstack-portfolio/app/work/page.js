import projectData from "@/public/ProjectData";

export default function work() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <>
            <img src={project.img.src} alt={project.title} className="w-full" />
            {/* <h2 className="text-lg font-semibold mt-2">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p> */}
          </>
        ))}
      </section>
    </>
  );
}
