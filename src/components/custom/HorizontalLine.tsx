interface HorizontalLineProps {
  color?: string;
  thickness?: string;
  width?: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ color = "#ccc", thickness = "1px", width = "100%" }) => (
  <hr style={{ borderColor: color, borderWidth: thickness, width: width }} />
);

export default HorizontalLine;
