import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const response = await axios.get("../plants.json");
        // console.log('fetchPlants');
        setPlants(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return { plants, loading, error };
};

export default usePlants;
