import React from "react";
// import { Grid } from '@material-ui/core';

import Button from "./index";
import ButtonLink from "./Link";

export const Default = () => (
  <>
    {/* <Grid container spacing={3}>
      <Grid item md={3}> */}
    <Button variant="primary">primary</Button>
    {/* </Grid>
      <Grid item md={3}> */}
    <Button variant="secondary">secondary</Button>
    {/* </Grid>
      <Grid item md={3}> */}
    <Button>default</Button>
    {/* </Grid>
    </Grid> */}

    {/* <Grid container spacing={3}>
      <Grid item md={3}>
        <Button variant="primary" outlined>
          primary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button variant="secondary" outlined>
          secondary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button outlined>default</Button>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item md={3}>
        <Button isLoading variant="primary">
          primary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button isLoading variant="secondary">
          secondary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button isLoading>default</Button>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item md={3}>
        <Button isLoading variant="primary" outlined>
          primary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button isLoading variant="secondary" outlined>
          secondary
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button isLoading outlined>
          default
        </Button>
      </Grid>
    </Grid> */}
  </>
);

export const Link = () => (
  // <Grid container spacing={3}>
  // <Grid item md={3}>
  <ButtonLink>Padrão</ButtonLink>
  // </Grid>
  // </Grid>
);

export default {
  title: "Button",
};
