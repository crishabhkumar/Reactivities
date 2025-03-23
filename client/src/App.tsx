import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));

    // fetch("https://localhost:5001/api/activities")
    //   .then((res) => res.json())
    //   .then((data) => setActivities(data));

    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h3" className="app">
        Reactivities:
      </Typography>
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title} </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
