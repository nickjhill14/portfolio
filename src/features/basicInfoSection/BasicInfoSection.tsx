import { Stack, Typography } from "@mui/material";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { BasicInfo } from "../../domain/basicInfo";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, phone, linkedIn, gitHub },
}: BasicInfoSectionProps) => {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Typography variant="h2" component="h1">
        {name}
      </Typography>
      <Typography variant="h3" component="h2">
        {role}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Link href={`mailto:${email}`} isExternal showAnchorIcon>
          {email}
        </Link>
        {phone && (
          <Link href={`tel:${phone}`} isExternal showAnchorIcon>
            {phone}
          </Link>
        )}
        <Link
          href={`https://www.linkedin.com/in/${linkedIn}`}
          isExternal
          showAnchorIcon
        >
          {linkedIn}
        </Link>
        <Link
          href={`https://www.github.com/${gitHub}`}
          isExternal
          showAnchorIcon
        >
          {gitHub}
        </Link>
      </Stack>
    </Stack>
  );
};
