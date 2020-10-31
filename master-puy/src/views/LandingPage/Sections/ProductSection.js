import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BookIcon from '@material-ui/icons/Book';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import StarIcon from '@material-ui/icons/Star';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2>La Unidad Educativa se propone</h2>
        </GridItem>
      </GridContainer>
        <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="Suministrar a los estudiantes mediante esas enseñanzas los fundamentos de todas las ramificaciones sucesivas de las actividades intelectuales."
              icon={BookIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="Preparar la inteligencia, la sensibilidad y la voluntad de los estudiantes para lograr el desarrollo integral de su personalidad."
              icon={EmojiEmotionsIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="Cooperar en la preparación de los futuros ciudadanos, a fin de que alcance una adecuada valoración de nuestra tradición histórica, para lograr su incorporación social activa."
              icon={EmojiPeopleIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="inculcar en los educandos que concurran en sus aulas, un claro conocimiento histórico de Venezuela, y capacitarlos para que participen y colaboren de manera activa y eficaz en su desarrollo."
              icon={EmojiFlagsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="Infundir a los estudiantes principios de nuestra democracia auténticamente participativa y protagónica, como sistema de gobierno que ha de llevarnos al goce y estabilidad plena de nuestra condición de nación soberana."
              icon={LocalLibraryIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              description="Proyectar la acción educativa de la unidad educativa hacia la comunidad con el fin de aprovechar sus extraordinarias creaciones."
              icon={StarIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </div>
    </div>
  );
}
