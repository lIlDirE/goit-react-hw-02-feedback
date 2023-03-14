const Section = ({children}) => (
	<section title={children.type.name}>
		{children}
  	</section>
)

export default Section