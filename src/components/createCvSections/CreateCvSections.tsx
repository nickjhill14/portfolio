import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cv, CvSection } from "../../domain/cv";
import { ConfigPreview } from "../configPreview/ConfigPreview";
import { Section } from "../section/Section";

const defaultCv: Cv = {
  skillsInfo: {
    skills: [],
    languages: [],
  },
};

function CreateCvSections() {
  const [cv, setCv] = useState<Cv>(defaultCv);
  const [currentCvSection, setCurrentCvSection] = useState<CvSection>({
    title: "",
  });
  const [requiredTitleError, setRequiredTitleError] = useState(false);

  const cvPreview = JSON.stringify(cv, null, 2);

  function handleCreate() {
    if (!currentCvSection.title) {
      setRequiredTitleError(true);
    } else {
      const currentCvSections = cv.cvSections ?? [];
      currentCvSections.push(currentCvSection);

      setCv({ ...cv, cvSections: currentCvSections });
      setCurrentCvSection({ title: "" });
      setRequiredTitleError(false);
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
      <Grid item xs={12} md={8}>
        <Section headingText="Create CV Sections">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                error={requiredTitleError}
                helperText={requiredTitleError && "Required field"}
                label="Title"
                value={currentCvSection.title}
                onChange={(event) =>
                  setCurrentCvSection({
                    ...currentCvSection,
                    title: event.target.value,
                  })
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
      <Grid item xs={12} md={4}>
        <ConfigPreview json={cvPreview} fileName="cv" />
      </Grid>
    </Grid>
  );
}

export { CreateCvSections, defaultCv };
