import Project from "./Project";

import site from "@/assets/image/site.png";

const Projects = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl m-4 mb-16">Projects</h2>
      <div>
        <Project
          title="Sahpathi"
          description="A web app where you can complete tasks and sprints in groups with friends."
          imageURL={site}
        />
      </div>
    </div>
  );
};

export default Projects;
