import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { CvSection } from "../../domain/cv";

type CreateCvSectionProps = {
  onCreate: (cvSection: CvSection) => void;
};

function CreateCvSection({ onCreate }: CreateCvSectionProps) {
  const [cvSection, setCvSection] = useState<CvSection>({ title: "" });
  const [requiredTitleError, setRequiredTitleError] = useState(false);

  function handleCreate() {
    if (!cvSection.title) {
      setRequiredTitleError(true);
    } else {
      onCreate(cvSection);
    }
  }

  return (
    <Stack spacing={2}>
      <TextField
        required
        error={requiredTitleError}
        helperText={requiredTitleError && "Required field"}
        label="Title"
        value={cvSection.title}
        onChange={(event) =>
          setCvSection({ ...cvSection, title: event.target.value })
        }
      />
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
    </Stack>
  );
}

export { CreateCvSection };
