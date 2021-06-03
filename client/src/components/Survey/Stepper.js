import { Button, MobileStepper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import PropTypes from "prop-types";

const Stepper = ({ maxSteps, activeStep, hasErrors, handleBack }) => (
  <MobileStepper
    steps={maxSteps}
    position="static"
    variant="progress"
    activeStep={activeStep}
    backButton={
      <Button size="small" disabled={activeStep <= 1} onClick={handleBack}>
        <KeyboardArrowLeft />
        Previous
      </Button>
    }
    nextButton={
      <Button size="small" type="submit" disabled={hasErrors}>
        Next
        <KeyboardArrowRight />
      </Button>
    }
  />
);

Stepper.propTypes = {
  text: PropTypes.string,
  errors: PropTypes.object,
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func,
};

export default Stepper;
