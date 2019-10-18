const ToolsUsed = ({ tools }) => {
	return (
		<div>
			<div className="container">
				{Object.entries(tools).map(([key, value]) => (
					<div className="box">
						<span className="tool-logo">{key}</span>
						<p>{value}</p>
					</div>
				))}
			</div>

			<style jsx>{`
				.container {
					display: flex;
					flex-direction: row;
					width: 100%;
					flex-wrap: wrap;
				}
				.box {
					display: flex;
					background-color: white;
					border-radius: 25px;
					border: none;
					align-items: center;
					justify-content: left;
					padding: 5px 15px 5px 5px;
					margin-right: 15px;
					margin-bottom: 15px;
				}
				.box p {
					color: var(--brand-orange);
					font-size: 12px;
				}
				.tool-logo {
					display: inline-block;
					width: 20px;
					height: 20px;
					-moz-border-radius: 10px;
					-webkit-border-radius: 10px;
					border-radius: 10px;
					background-color: #ee7100;
					margin-right: 5px;
					text-align: center;
					line-height: 20px;
					font-size: 10px;
				}
			`}</style>
		</div>
	);
};

export default ToolsUsed;
