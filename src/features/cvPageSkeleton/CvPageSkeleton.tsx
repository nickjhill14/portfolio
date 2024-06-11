import { Grid, Skeleton } from "@mui/material";

export const CvPageSkeleton = () => {
  return (
    <Grid container spacing={2} p={2} data-testid="cv-page-skeleton">
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
};
