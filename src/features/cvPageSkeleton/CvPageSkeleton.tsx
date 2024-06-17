import { Skeleton } from "@nextui-org/skeleton";

export const CvPageSkeleton = () => (
  <div
    className="grid grid-rows-2 grid-cols-2 gap-4"
    data-testid="cv-page-skeleton"
  >
    <Skeleton className="rounded-lg" data-testid="cv-section-1-skeleton">
      <div className="h-96" />
    </Skeleton>
    <Skeleton className="rounded-lg" data-testid="cv-section-2-skeleton">
      <div className="h-96" />
    </Skeleton>
    <Skeleton className="rounded-lg" data-testid="cv-section-3-skeleton">
      <div className="h-96" />
    </Skeleton>
    <Skeleton className="rounded-lg" data-testid="cv-section-4-skeleton">
      <div className="h-96" />
    </Skeleton>
    <Skeleton
      className="rounded-lg col-span-full"
      data-testid="cv-skills-section-skeleton"
    >
      <div className="h-80" />
    </Skeleton>
  </div>
);
