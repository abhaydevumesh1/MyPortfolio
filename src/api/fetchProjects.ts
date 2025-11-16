
export const fetchProjects = async () => {
  const res = await fetch('/MyPortfolio/data/projects.json');
  return res.json();
};