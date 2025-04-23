import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export function LineChartComponent() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page b', uv: 400, pv: 2400, amt: 2400}]

  return(
    <LineChart width={900} height={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#0095E5" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}