import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  title: string;
  description: string;
}

const ProjectCard: React.FC<Props> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div ref={ref} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;