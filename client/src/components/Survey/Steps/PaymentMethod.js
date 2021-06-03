import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Stepper from "../Stepper";
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Typography } from "@material-ui/core";

const PaymentMethod = ({ maxSteps, activeStep, handleBack, handleNext, handleData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const hasErrors = Object.keys(errors).length !== 0;

  const onSubmit = (data) => {
    handleData({ paymentMethod: data });
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box padding={3}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Car Information
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">How did you pay for your car?</FormLabel>

              <Controller
                name="cash"
                control={control}
                defaultValue={false}
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Cash" />}
              />

              <Controller
                name="card"
                control={control}
                defaultValue={false}
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Card" />}
              />

              <Controller
                name="loan"
                control={control}
                defaultValue={false}
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Loan" />}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Stepper
        maxSteps={maxSteps}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        hasErrors={hasErrors}
      />
    </form>
  );
};

PaymentMethod.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default PaymentMethod;
