import style from "./Statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, setTotal, setPercentage }) => {
    const percentage = setPercentage();
    const total = setTotal();

    return (
        <div className={style.statistics}>
            <span className={style.goodText}>Good: {good}</span>
            <span className={style.neutralText}>Neutral: {neutral}</span>
            <span className={style.badText}>Bad: {bad}</span>
            <span className={style.totalText}>Total: {total}</span>
            <span className={style.positivePercentageText}>Positive feedback: {percentage}% </span>
        </div>
    );
};

export default Statistics;

Statistics.propTypes = {
    setTotal: PropTypes.func.isRequired,
    setPercentage: PropTypes.func.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
};