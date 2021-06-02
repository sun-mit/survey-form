import { useState } from "react";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../layout/Header/Dashboard";
import Footer from "../layout/Footer";
import Declaration from "./Declaration";
import Credentials from "./Credentials";
import PersonalInfo from "./PersonalInfo";
import PresentAddress from "./PresentAddress";
// import PermanentAddress from "./PermanentAddress";
import EmergencyContact from "./EmergencyContact";
import OtherMembers from "./OtherMembers";
// import MaidInfo from "./MaidInfo";
// import DriverInfo from "./DriverInfo";
import PrevHouseInfo from "./PrevHouseInfo";
import Portrait from "./Portrait";
import Preview from "./Preview";



const ActiveComponent = ({ ComponentName, ...others }) => <ComponentName {...others} />;

const registerSteps = [
  Declaration,
  Credentials,
  PersonalInfo,
  PresentAddress,
  // PermanentAddress,
  EmergencyContact,
  OtherMembers,
  // MaidInfo,
  // DriverInfo,
  PrevHouseInfo,
  Portrait,
  Preview,
];

const Register = () => {

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = registerSteps.length;

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const [formData, setFormData] = useState({});
  const handleData = (data) => setFormData({ ...formData, ...data });

  console.log(formData);

  return (
    <>
      <Header />

      <div className={classes.root}>
        <Container component={Paper} maxWidth="md" disableGutters>
          <ActiveComponent
            ComponentName={registerSteps[activeStep]}
            activeStep={activeStep}
            maxSteps={maxSteps}
            handleBack={handleBack}
            handleNext={handleNext}
            formData={formData}
            handleData={handleData}
          />
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Register;
