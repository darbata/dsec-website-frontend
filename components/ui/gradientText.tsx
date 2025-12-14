export default function GradientText({
	children,
	className,
	colors,
}: {
	children: React.ReactNode;
	className?: string | null;
	colors?: string[];
}) {
	if (!colors) colors = ["--secondary", "--primary"];

	const gradientStyle: React.CSSProperties = {
		backgroundImage: `linear-gradient(90deg, var(${colors[0]}), var(${colors[1]}))`,
		WebkitBackgroundClip: "text",
		color: "transparent",
		backgroundClip: "text",
		display: "inline-block",
	};

	const sizing = ""; //? what's this for?

	return (
		<p
			className={`w-fit text-sm font-semibold ${className || ""}`}
			style={gradientStyle}
		>
			{children}
		</p>
	);
}
