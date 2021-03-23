import { Button, Container, List, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import useStyles from "../styles/classes";

function Trivia(props) {
  const classes = useStyles();
  let i = 0;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const [show, setShow] = useState(false)

  const handleQuestion = async (correct) => {
    if (correct === true) {
        let n = corrects + 1
        setCorrects(n)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
        setShow(true)
        setTimeout(() => {
            setShow(false)
            setCurrentQuestion(currentQuestion + 1)
        }, 1000)
    } else {
        setShow(true) 
        if (correct === true) {
          let n = corrects + 1
          setCorrects(n)
      }

        setTimeout(() => {
            alert(`Tus puntos son: ${corrects}`)
            setShow(false)
            setCorrects(0);
            props.setClick(false)
        }, 2000)
    }
  };
  const checkResult = (correct) => {
    if(correct === true){
        return classes.correct
    } else {
        return classes.incorrect
    }
  }
  return (
    <Fragment>
      <Container maxWidth='xl'>
      <Typography variant="h5" align='center' gutterBottom>
        {props.questions[currentQuestion].text}
      </Typography>
      <Container align="center">
      <img alt='QuestionImage' src={props.questions[currentQuestion].image} className={classes.image}/>
      {props.questions[currentQuestion].options.map((opt) => {
          i++;
          return (
            <Container key={i}>
              <List>
                <Button
                  variant="contained"
                  className={show ? checkResult(opt.correct) : classes.normal }
                  onClick={() => handleQuestion(opt.correct)}
                >
                  {opt.text}
                </Button>
              </List>
            </Container>
          );
        })}
      </Container>
      </Container>
    </Fragment>
  );
}

export default Trivia;
