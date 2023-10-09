import Card from "../UI/Card";
import classes from "../Calculator/Calculator.module.css";

const Calculator = () => {
  return (
    <Card>
      <div className={classes.main}>
        <input className={classes.input} type="text"></input>
        <div className={classes.row1}>
            <button>AC/C</button>
            <button>+/-</button>
            <button>%</button>
            <button>/</button>
        </div>
      </div>

    </Card>
  );
};
export default Calculator;
