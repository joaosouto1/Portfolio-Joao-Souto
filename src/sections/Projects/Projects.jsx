import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={''}
          link=""
          h3=""
          p=""
        />
        <ProjectCard
          src={''}
          link=""
          h3=""
          p=""
        />
        <ProjectCard
          src={''}
          link=""
          h3=""
          p=""
        />
        <ProjectCard
          src={''}
          link=""
          h3="zzz"
          p="zzz"
        />
      </div>
    </section>
  );
}

export default Projects;
