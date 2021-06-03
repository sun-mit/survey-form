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

const CarType = ({ maxSteps, activeStep, handleBack, handleNext, handleData }) => {
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
              name="carType"
              control={control}
              defaultValue="New"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">What is your car type?</FormLabel>

                  <RadioGroup aria-label="carType" value={value} onChange={onChange}>
                    <FormControlLabel value="New" control={<Radio />} label="New" />
                    <FormControlLabel value="Used" control={<Radio />} label="Used" />
                  </RadioGroup>
                </FormControl>
              )}
            />

            {errors?.carType && (
              <FormHelperText id="carType" error>
                {errors?.carType?.message}
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

CarType.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default CarType;
