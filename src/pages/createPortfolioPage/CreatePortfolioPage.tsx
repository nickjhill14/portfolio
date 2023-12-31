import { Home } from "@mui/icons-material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Page } from "../../components/page/Page";
import { CreateBasicInfoSection } from "../../features/createBasicInfoSection/CreateBasicInfoSection";
import { CreateCvSections } from "../../features/createCvSections/CreateCvSections";

function CreatePortfolioPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Create basic info", "Create CV sections"];

  return (
    <Page>
      <Button
        onClick={() => navigate("/")}
        startIcon={<Home />}
        role="link"
        text="Go Home"
      />
      <Typography variant="h2" component="h1">
        Create A Portfolio
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stepper>
            {steps.map((step, index) => {
              return (
                <Step key={step} active={index === activeStep}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          {activeStep === 0 ? <CreateBasicInfoSection /> : <CreateCvSections />}
        </Grid>
        {activeStep === 0 && (
          <Grid item xs={12} display="flex" justifyContent="end">
            <Button
              onClick={() => setActiveStep((previousStep) => previousStep + 1)}
              endIcon={<NavigateNextIcon />}
              text="Next"
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid item xs={12}>
            <Button
              onClick={() => setActiveStep((previousStep) => previousStep - 1)}
              text="Back"
              startIcon={<NavigateBeforeIcon />}
            />
          </Grid>
        )}
      </Grid>
    </Page>
  );
}

export { CreatePortfolioPage };
