import * as React from "react";
import { Container, GraphLabel } from "./styles";
import { useEnhance } from "./enhance";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

export const HumanTag: React.FC = () => {
  const { humanMovementData } = useEnhance();
  console.log(humanMovementData);
  return (
    <Container>
      <GraphLabel>人タグ</GraphLabel>
      <LineChart width={500} height={300} data={humanMovementData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="NameTag1" stroke="#79b636" />
        <Line type="monotone" dataKey="NameTag2" stroke="#0e2ecd" />
        <Line type="monotone" dataKey="NameTag3" stroke="#b061ee" />
        <Line type="monotone" dataKey="NameTag4" stroke="#a78ec1" />
      </LineChart>
    </Container>
  );
};
