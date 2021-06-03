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

const CarOwn = ({ maxSteps, activeStep, handleNext, handleData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const hasErrors = Object.keys(errors).length !== 0;

  const onSubmit = (data) => {
    const updatedData = {
      hasACar: data?.hasACar === "Yes" ? true : false,
    };
    handleData(updatedData);
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
              name="hasACar"
              control={control}
              defaultValue="Yes"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Do you own a car?</FormLabel>

                  <RadioGroup aria-label="hasACar" value={value} onChange={onChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              )}
            />

            {errors?.hasACar && (
              <FormHelperText id="hasACar" error>
                {errors?.hasACar?.message}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </Box>

      <Stepper maxSteps={maxSteps} activeStep={activeStep} handleNext={handleNext} hasErrors={hasErrors} />
    </form>
  );
};

CarOwn.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default CarOwn;
