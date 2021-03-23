import React, { Fragment } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import api from "./api/api";
import Trivia from './components/Trivia'
import useStyles from "./styles/classes";
function App() {
  const classes = useStyles()
  const [buttonClick, setButtonClick] = React.useState(false);
  const start = () => {
    setButtonClick(true);
  };
  if (!buttonClick) {
    return (
      <Fragment>
       <Container align="center">
        <Typography variant="h2">{api.title}</Typography>
          <Container align='center'>
          <img alt='MainImage' src={api.image} className={classes.image}/>
          </Container>
        <Button variant='contained' color='primary' onClick={() => start()}>Comenzar</Button>
       </Container>
      </Fragment>
    );
  } else {
    return <Trivia questions={api.questions} setClick={setButtonClick}/>;
  }
}



export default App;
