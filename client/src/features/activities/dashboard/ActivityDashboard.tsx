import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../Details/ActivityDetail";
import ActivtiyForm from "../form/ActivtiyForm";

type PropsActivityDashboard = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  cancelActivity: () => void;
  handleSelectActivity: (id: string) => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
  editMode: boolean;
  handleSubmitForm: (activity: Activity) => void;
  handleDeleteActivity: (id: string) => void;
};

export default function ActivityDashboard({
  activities,
  selectedActivity,
  handleSelectActivity,
  cancelActivity,
  openForm,
  closeForm,
  editMode,
  handleSubmitForm,
  handleDeleteActivity,
}: PropsActivityDashboard) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
        {/* <List>
          {activities.map((activity: Activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title} </ListItemText>
            </ListItem>
          ))}
        </List> */}
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            activity={selectedActivity}
            cancelActivity={cancelActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivtiyForm
            closeForm={closeForm}
            activity={selectedActivity}
            submitForm={handleSubmitForm}
          />
        )}
      </Grid2>
    </Grid2>
  );
}
