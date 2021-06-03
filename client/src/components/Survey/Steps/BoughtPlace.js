import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Stepper from "../Stepper";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const BoughtPlace = ({ maxSteps, activeStep, handleBack, handleNext, handleData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const hasErrors = Object.keys(errors).length !== 0;

  const onSubmit = (data) => {
    handleData(data);
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
            <Controller
              name="boughtPlace"
              control={control}
              defaultValue="Garage"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Where did you buy used car?</FormLabel>

                  <RadioGroup aria-label="boughtPlace" value={value} onChange={onChange}>
                    <FormControlLabel value="Garage" control={<Radio />} label="Garage" />
                    <FormControlLabel value="Owner" control={<Radio />} label="Owner" />
                  </RadioGroup>
                </FormControl>
              )}
            />

            {errors?.boughtPlace && (
              <FormHelperText id="boughtPlace" error>
                {errors?.boughtPlace?.message}
              </FormHelperText>
            )}
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

BoughtPlace.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default BoughtPlace;
