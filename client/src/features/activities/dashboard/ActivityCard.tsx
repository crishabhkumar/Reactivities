import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type PropsActivityCard = {
  activity: Activity;
  handleSelectActivity: (id: string) => void;
  handleDeleteActivity: (id: string) => void;
};

export default function ActivityCard({
  activity,
  handleSelectActivity,
  handleDeleteActivity,
}: PropsActivityCard) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            size="medium"
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteActivity(activity.id);
            }}
          >
            Delete
          </Button>
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              handleSelectActivity(activity.id);
            }}
          >
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
