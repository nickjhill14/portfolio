import { Skeleton } from "@mui/material";

export const CvPageSkeleton = () => (
  <div data-testid="cv-page-skeleton">
    <Skeleton
      height={250}
      variant="rectangular"
      data-testid="cv-section-1-skeleton"
    />
    <Skeleton
      height={250}
      variant="rectangular"
      data-testid="cv-section-2-skeleton"
    />
    <Skeleton
      height={250}
      variant="rectangular"
      data-testid="cv-section-3-skeleton"
    />
    <Skeleton
      height={250}
      variant="rectangular"
      data-testid="cv-section-4-skeleton"
    />
    <Skeleton
      height={250}
      variant="rectangular"
      data-testid="skills-section-skeleton"
    />
  </div>
);
