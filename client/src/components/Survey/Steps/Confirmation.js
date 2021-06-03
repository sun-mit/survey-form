import { useEffect } from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { submitSurvey } from "utils/serverRequests";

const Confirmation = ({ formData }) => {
  useEffect(() => {
    submitSurvey(formData);
  }, [formData]);

  return (
    <Box padding={3}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Avatar
              src={process.env.PUBLIC_URL + "img/confirmation.png"}
              alt=""
              style={{ width: "600px", height: "auto" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center" color="primary">
            Thanks for your Coordination!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Confirmation.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default Confirmation;
