import '../Chart/chart.scss'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LineChart,  ResponsiveContainer } from 'recharts';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bubble, Line} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
    
const options = {
    scales: {
        y: {
            beginAtZero: true,
            grid:{
                display:false
            }
        },
        x: {
            beginAtZero: true,
            grid:{
                display:false
            }
        },
    },
};
    

export const dataSet = {
    datasets: [
        {
        label: 'Red dataset',
        data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: '#000',
        },
        {
        label: 'Blue dataset',
        data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: '#3f75ff',
        },
    ],
};

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];

const RenderLineChart = () => (
    <ResponsiveContainer height={200}>
        <LineChart data={data}>
            <Line 
                type="monotone" 
                dataKey="uv" 
                stroke="#000" 
                strokeWidth={2}
            />
        </LineChart>
    </ResponsiveContainer>
);

export default function FeaturedChart({type}){
    let data

    switch(type){
        case 'bubble':
            data={component:<Bubble options={options} data={dataSet} />                                      }
        break;
        case 'line':
            data={component:<Line options={options} data={dataSet} />                                      }
        break;
        default:
            break;
    }

    return (
        <>
            <div className="featured chart shadow">
                {/* <RenderLineChart /> */}
                {data.component}
            </div>
        </>
    )

    return (
        <>
            <div className="featured chart shadow">
                <div className="top">
                    <h1 className="title">Total Profits</h1>
                    <MoreVertIcon />
                </div>
                <div className="bottom">

                </div>
            </div>
        </>
    )
}