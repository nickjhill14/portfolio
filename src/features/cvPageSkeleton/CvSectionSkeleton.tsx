import { Skeleton } from "@nextui-org/skeleton";

export const CvSectionSkeleton = () => (
  <Skeleton className="rounded-lg" data-testid="cv-section-skeleton">
    <div className="h-96" />
  </Skeleton>
);
