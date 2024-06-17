import { Skeleton } from "@nextui-org/skeleton";

export const LandingPageSkeleton = () => (
  <div
    className="grid grid-cols-3 gap-4 w-1/2"
    data-testid="landing-page-skeleton"
  >
    <Skeleton className="rounded-lg col-span-full" data-testid="name-skeleton">
      <div className="h-16" />
    </Skeleton>
    <Skeleton className="rounded-lg col-span-2" data-testid="role-skeleton">
      <div className="h-12" />
    </Skeleton>
    <div className="grid grid-cols-subgrid col-span-3 gap-4">
      <Skeleton className="rounded-lg" data-testid="email-skeleton">
        <div className="h-8" />
      </Skeleton>
      <Skeleton className="rounded-lg" data-testid="github-skeleton">
        <div className="h-8" />
      </Skeleton>
      <Skeleton className="rounded-lg" data-testid="linkedin-skeleton">
        <div className="h-8" />
      </Skeleton>
    </div>
  </div>
);
