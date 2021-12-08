import { Doughnut,Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function index() {
    return (
        <>
            <div className="box m-auto">
                <div className="block">
                    <label className="title is-4">Lorem ipsum</label>
                    <p className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde!</p>
                </div>
                <Doughnut
                    data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# de encuestas',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 2,
                        }]
                    }}
                    height={400}
                    width={600}
                    options={{
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </>
    )
}
