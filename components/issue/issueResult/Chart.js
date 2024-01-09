import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useStore from "@/store";

export default class Chart extends PureComponent {
  render() {
    // Variables:
    const { heirsOfFard, heirsOfConsanguinity } = useStore.getState();

    const allHeirs = [...heirsOfFard, ...heirsOfConsanguinity];
    const data = allHeirs.map((heir) => {
      return {
        name: heir.title,
        value: parseFloat(heir.earn.toFixed(2)),
      };
    });
    return (
      <ResponsiveContainer>
        <PieChart width={800} height={200} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={150}
            cy={100}
            innerRadius={40}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={10}
            dataKey="value"
          >
            {data.map((heir, index) => (
              <Cell
                key={`cell-${index}`}
                fill={this.props.heirTitle == heir.name ? "#F5D704" : "#3B1E08"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
