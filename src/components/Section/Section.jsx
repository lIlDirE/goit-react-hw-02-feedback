import PropTypes from 'prop-types';

const Section = ({children}) => (
	<section title={children.type.name}>
		{children}
  	</section>
)

Section.propTypes = {
	children: PropTypes.object.isRequired,
  };

export default Section