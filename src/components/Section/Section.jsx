import PropTypes from 'prop-types';

const Section = ({children,title}) => (
	<section title={title}>
		{children}
  	</section>
)

Section.propTypes = {
	children: PropTypes.object.isRequired,
  };

export default Section