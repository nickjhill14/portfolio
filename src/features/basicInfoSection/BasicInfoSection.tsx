import {
  AlternateEmail,
  GitHub,
  LinkedIn,
  LocalPhone,
} from "@mui/icons-material";
import { Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain/basicInfo";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({ basicInfo }: BasicInfoSectionProps) => {
  const { name, role, email, phone, linkedIn, gitHub } = basicInfo;

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
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTypography icon={AlternateEmail} text={email} variant="body1" />
        </Link>
        {phone && (
          <Link href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
            <IconTypography icon={LocalPhone} text={phone} variant="body1" />
          </Link>
        )}
        <Link
          href={`https://www.linkedin.com/in/${linkedIn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTypography icon={LinkedIn} text={linkedIn} variant="body1" />
        </Link>
        <Link
          href={`https://www.github.com/${gitHub}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTypography icon={GitHub} text={gitHub} variant="body1" />
        </Link>
      </Stack>
    </Stack>
  );
};
