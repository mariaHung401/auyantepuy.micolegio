import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Warning from "components/Typography/Warning.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <h2>Sobre Nosotros</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h5>
            La unidad educativa es una institución destinada a desarrollar una acción educacional integral, destacando la correspondiente interdependencia de los niveles y etapas interaccionadas, donde los aprendizajes constituyen experiencia significativas vinculadas a la realidad, facilitando transparencias de los conocimientos, habilidades y destrezas a situaciones de la vida cotidiana, de manera que los logros obtenidos por los educandos no sean resultados de simple transferencias de conocimiento, sino más bien de lo que ellos pueden hacer por si mismos.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h5>
            En el nivel de Educación Primaria se complementará la formación integral del educando, mediante el desarrollo de sus destrezas y habilidades cumpliendo funciones de exploración y orientación educativa y emocional para inclinarlos en el aprendizaje de disciplinas y técnicas que le permitan el ejercicio de una función socialmente útil.
          </h5>
          <h5>
            Con la educación media general se atenderá el proceso formativo del alumno. Ampliando el desarrollo integral y su formación cultural para ofrecerle oportunidades que definan su compromiso de estudio y de trabajo, brindando una capacitación científica y humanista.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  </div>
  );
}
