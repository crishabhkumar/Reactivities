import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  function handleDeleteActivity(id: string) {
    setActivities((prevState) => prevState.filter((a) => a.id !== id));
  }

  function handleSubmitForm(activity: Activity) {
    if (activity.id) {
      setActivities((prevState) =>
        prevState.map((a) => (a.id === activity.id ? activity : a))
      );
    } else {
      activity.id = activities.length.toString();
      setActivities((prevState) => [...prevState, activity]);
    }
    setEditMode(false);
  }

  function handleOpenForm(id?: string) {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelActivity();
    }
    setEditMode(true);
  }

  function handleCloseForm() {
    setEditMode(false);
  }

  function handleSelectActivity(id: string) {
    const activity = activities.find((activity) => activity.id === id);
    if (activity === undefined) {
      console.log("Activity not found");
      return;
    }
    setSelectedActivity(activity);
  }

  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }

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
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          cancelActivity={handleCancelActivity}
          handleSelectActivity={handleSelectActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          handleSubmitForm={handleSubmitForm}
          handleDeleteActivity={handleDeleteActivity}
        />
      </Container>
    </Box>
  );
}

export default App;
