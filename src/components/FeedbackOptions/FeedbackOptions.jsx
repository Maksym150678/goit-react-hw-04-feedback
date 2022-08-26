import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const classNames = {
  good: style.good,
  neutral: style.neutral,
  bad: style.bad,
};
const FeedbackOptions = ({ setFeedback, options }) => {
  const buttons = options.map(item => (
    <button
      key={nanoid()}
      type="button"
      name={item}
      className={classNames[item]}
      onClick={setFeedback}
    >
      {item}
    </button>
  ));
  return <div className={style.controls}>{buttons}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propType = {
  setFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
}),
};
