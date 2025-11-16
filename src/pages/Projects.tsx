import { useEffect, useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { fetchProjects } from '../api/fetchProjects';
import ProjectCard from '../components/ProjectCard';

interface Project {
  title: string;
  description: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { query, setQuery, filtered } = useSearch<Project>(projects, 'title');

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <section className="section">
      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="cards">
        {filtered.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
};

export default Projects;