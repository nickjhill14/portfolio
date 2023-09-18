import { Home } from "@mui/icons-material";
import { Button, Grid, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CvPageSkeleton() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Button
          onClick={() => navigate("/")}
          role="link"
          startIcon={<Home />}
          variant="contained"
        >
          Go Home
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          height={250}
          variant="rectangular"
          data-testid="cv-section-1-skeleton"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          height={250}
          variant="rectangular"
          data-testid="cv-section-2-skeleton"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          height={250}
          variant="rectangular"
          data-testid="cv-section-3-skeleton"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          height={250}
          variant="rectangular"
          data-testid="cv-section-4-skeleton"
        />
      </Grid>
      <Grid item xs={12}>
        <Skeleton
          height={250}
          variant="rectangular"
          data-testid="skills-section-skeleton"
        />
      </Grid>
    </Grid>
  );
}

export { CvPageSkeleton };
