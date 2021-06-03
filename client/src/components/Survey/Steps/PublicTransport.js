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

const PublicTransport = ({ maxSteps, activeStep, handleBack, handleNext, handleData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const hasErrors = Object.keys(errors).length !== 0;

  const onSubmit = (data) => {
    const updatedData = {
      usePublicTransport: data?.usePublicTransport === "Yes" ? true : false,
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
              name="usePublicTransport"
              control={control}
              defaultValue="Yes"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Do you use public transport?</FormLabel>

                  <RadioGroup aria-label="usePublicTransport" value={value} onChange={onChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              )}
            />

            {errors?.usePublicTransport && (
              <FormHelperText id="usePublicTransport" error>
                {errors?.usePublicTransport?.message}
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

PublicTransport.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default PublicTransport;
