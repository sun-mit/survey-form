import { useState } from "react";
import { Box, Container, Paper } from "@material-ui/core";

import UserInfo from "./Steps/UserInfo";
import CarOwn from "./Steps/CarOwn";
import CarColor from "./Steps/CarColor";
import CarType from "./Steps/CarType";
import PaymentMethod from "./Steps/PaymentMethod";
import BoughtPlace from "./Steps/BoughtPlace";
import PublicTransport from "./Steps/PublicTransport";
import Confirmation from "./Steps/Confirmation";

const ActiveComponent = ({ ComponentName, ...others }) => <ComponentName {...others} />;

const Survey = () => {
  const [formData, setFormData] = useState({});
  const handleData = (data) => setFormData({ ...formData, ...data });

  const personHasCar = formData?.hasACar;
  const isUsedCar = formData?.carType === "Used";
  const surveySteps = [
    UserInfo,
    CarOwn,
    personHasCar && CarColor,
    personHasCar && CarType,
    personHasCar && PaymentMethod,
    personHasCar && isUsedCar && BoughtPlace,
    PublicTransport,
    Confirmation,
  ].filter((step) => step !== false);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = surveySteps.length;

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <Container component={Paper} maxWidth="md" disableGutters>
      <Box mt={5}>
        <ActiveComponent
          ComponentName={surveySteps[activeStep]}
          activeStep={activeStep}
          maxSteps={maxSteps}
          handleBack={handleBack}
          handleNext={handleNext}
          formData={formData}
          handleData={handleData}
        />
      </Box>
    </Container>
  );
};

export default Survey;
