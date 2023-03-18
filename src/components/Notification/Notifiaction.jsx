const Notification = ({message}) => (
		<p style={{
			margin: 8,
			padding: "12px 16px",
			borderRadius: 4,
			backgroundColor: "gray",
			color: "white",
			display: "flex",
			justifyContent: "center",
		  }}>
			{message}
		</p>
)

export default Notification;