import { Skeleton } from "@mui/material";

export const LandingPageSkeleton = () => (
  <div data-testid="landing-page-skeleton">
    <h2>
      <Skeleton data-testid="name-skeleton" width={500} />
    </h2>
    <h3>
      <Skeleton data-testid="role-skeleton" width={750} />
    </h3>
    <div>
      <Skeleton width={125} data-testid="email-skeleton" />
      <Skeleton width={125} data-testid="git-hub-skeleton" />
      <Skeleton width={125} data-testid="linked-in-skeleton" />
    </div>
  </div>
);
