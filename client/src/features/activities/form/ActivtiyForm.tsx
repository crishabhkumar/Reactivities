import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type PropsActivtiyForm = {
  closeForm: () => void;
  activity: Activity | undefined;
  submitForm: (activity: Activity) => void;
};

export default function ActivtiyForm({
  closeForm,
  activity,
  submitForm,
}: PropsActivtiyForm) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const activityData: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
      activityData[key] = value;
    });

    if(activity) activityData.id = activity.id;

    submitForm(activityData as unknown as  Activity);
  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={3}
        onSubmit={handleSubmit}
      >
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          defaultValue={activity?.date}
        />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
