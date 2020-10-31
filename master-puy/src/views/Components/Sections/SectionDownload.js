import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import acuerdos from "assets/img/docs/acuerdos.pdf";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>ACUERDOS DE CONVIVENCIA</h2>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
              <GridItem>
                <div>
                  <h6>
                    ACUERDOS DE CONVIVENCIA UNIDAD EDUCATIVA PRIVADA “AUYANTEPUY”
                  </h6>
                </div>
                <Button color="warning" round href={acuerdos} target="_blank">
                  Descargar Archivo
                </Button>
              </GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
