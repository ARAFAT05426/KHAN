import { useState, useEffect } from "react";
const useAvatar = () => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchAvatar = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://khan-delta.vercel.app/dashboard/api");
      if (!res.ok) {
        throw new Error("Failed to fetch avatar");
      }
      const data = await res.json();
      setAvatar(data.avatar);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  return { avatar, loading, refetch: fetchAvatar };
};

export default useAvatar;
