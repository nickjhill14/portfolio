import { LinkedIn } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getBasicInfoLoader } from "../../api/loaders/portfolioLoader";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain/basicInfo";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";
import { LandingPageSkeleton } from "../../features/landingPageSkeleton/LandingPageSkeleton";

function LandingPage() {
  const basicInfoLoaderData = useLoaderData<typeof getBasicInfoLoader>();

  return (
    <Grid container spacing={2} p={2} mb={2}>
      <Suspense fallback={<LandingPageSkeleton />}>
        <Await resolve={basicInfoLoaderData.basicInfo}>
          {({ name, role, email, phone, linkedIn, gitHub }: BasicInfo) => (
            <Grid
              container
              spacing={2}
              p={2}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h2" component="h1">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" component="h2">
                  {role}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconTypography
                      icon={AlternateEmailOutlinedIcon}
                      text={email}
                      variant="body1"
                    />
                  </Link>
                  {phone && (
                    <Link
                      href={`tel:${phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconTypography
                        icon={LocalPhoneOutlinedIcon}
                        text={phone}
                        variant="body1"
                      />
                    </Link>
                  )}
                  <Link
                    href={`https://www.linkedin.com/in/${linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconTypography
                      icon={LinkedIn}
                      text={linkedIn}
                      variant="body1"
                    />
                  </Link>
                  <Link
                    href={`https://www.github.com/${gitHub}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconTypography
                      icon={GitHubIcon}
                      text={gitHub}
                      variant="body1"
                    />
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          )}
        </Await>
      </Suspense>
      <Grid item xs={12}>
        <LandingPageLinks />
      </Grid>
    </Grid>
  );
}

export { LandingPage };
