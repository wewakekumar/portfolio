const About = () => {
  return (
    <div>
      <h2>About</h2>
      <div className="flex flex-row items-start gap-x-4">
        <div className="w-96 h-1 bg-primary"></div>
        <div className="p-0 bg-red">
          Vivek is an accomplished frontend developer with a proven track record
          of architecting and delivering complete frontend application from
          scratch. With three years of hands-on experience in frontend
          development, Vivek has honed his skills in designing and implementing
          <span className="text-primary"> high-performance</span>,{" "}
          <span className="text-primary">secure</span>, and{" "}
          <span className="text-primary">scalable</span> web applications.
          Proficient in HTML, CSS, and JavaScript, Vivek specializes in modern
          frameworks like <span className="text-primary">ReactJs</span>.
        </div>
      </div>
    </div>
  );
};

export default About;
