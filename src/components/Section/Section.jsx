import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <>
        <h1 className={style.title}>{title}</h1>
        <br />
        {children}
        </>
    );
    };

    export default Section;
    Section.propTypes = {
            title: PropTypes.string.isRequired,
        };
    