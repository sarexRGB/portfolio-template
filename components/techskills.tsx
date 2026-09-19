import { div } from "motion/react-client";

const technologies = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
  },
  {
    name: "Django",
    icon: "devicon-django-plain colored",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-original colored",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain colored",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain colored",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
  },
];

const Techskills = () => {
    return (
        <section id="techskills" className="relative py-20 px-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Habilidades tecnológicas
            </h2>

            <div className="flex flex-row gap-6 ">
                {technologies.map((technology) => (
                    <div key={technology.name}>
                        <i className={technology.icon}></i>
                        <span>{technology.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Techskills;