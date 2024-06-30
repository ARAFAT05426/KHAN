import { useState, useEffect } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const refetch = async () => {
    try {
      const res = await fetch("https://khan-delta.vercel.app/projects/api");
      const data = await res.json();
      setProjects(data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setProjects([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { projects, loading, refetch };
};

export default useProjects;
