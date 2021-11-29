import {
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { data01, data02 } from "../../sampleData";

export const Graph = (props) => {
  const { list } = props;

  return (
    <>
      <PieChart width={730} height={250}>
        {/* <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          /> */}
        <Pie
          data={list}
          dataKey="count"
          nameKey="language"
          cx="50%"
          cy="50%"
          // innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </>
  );
};
