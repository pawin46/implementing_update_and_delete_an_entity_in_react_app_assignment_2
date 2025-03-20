import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error(`Failed to fetch items: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;