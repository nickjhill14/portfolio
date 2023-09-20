import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { CvSection } from "../../domain/cv";
import { Section } from "../section/Section";

function CreateCvSections() {
  const [cvSection, setCvSection] = useState<CvSection>({ title: "" });
  const [requiredTitleError, setRequiredTitleError] = useState(false);

  function handleCreate() {
    if (!cvSection.title) {
      setRequiredTitleError(true);
    }
  }

  return (
    <Grid
      container
      spacing={2}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Grid item xs={12}>
        <Section headingText="Create CV Sections">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                error={requiredTitleError}
                helperText={requiredTitleError && "Required field"}
                label="Title"
                value={cvSection.title}
                onChange={(event) =>
                  setCvSection({ ...cvSection, title: event.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <Button
                variant="contained"
                onClick={handleCreate}
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                startIcon={<AddIcon />}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Section>
      </Grid>
    </Grid>
  );
}

export { CreateCvSections };
