import { Skeleton } from "@nextui-org/skeleton";
import { CvSectionSkeleton } from "./CvSectionSkeleton";

export const CvPageSkeleton = () => (
  <div
    className="grid grid-rows-2 grid-cols-2 gap-4"
    data-testid="cv-page-skeleton"
  >
    <CvSectionSkeleton />
    <CvSectionSkeleton />
    <CvSectionSkeleton />
    <CvSectionSkeleton />
    <Skeleton
      className="rounded-lg col-span-full"
      data-testid="cv-skills-section-skeleton"
    >
      <div className="h-80" />
    </Skeleton>
  </div>
);
