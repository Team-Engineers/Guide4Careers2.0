import React from "react";
import Chart from "react-apexcharts";

const pieChartConfig = {
    type: "pie",
    height: 440,
    series: [10, 20, 30, 20, 20],
    options: {
        colors: ['#55F8B3', '#F7FA63', '#C92C6D', '#2C9392', '#FF7676'],
        labels: ["Computer", "Sales", "Marketing", "Social Media", "Cloud"],
        stroke: {
            width: 0 
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    size: '0%' 
                },
                dataLabels: {
                    offset: 0, 
                }
            }
        },
       
    }
};

const barGraphConfig = {
    type: "bar",
    height: 440,
    series: [{
        data: [500, 900, 700, 1000, 300, 400],
    }],
    options: {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: false,
                borderRadius: 10,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: ['#FFA1C8'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        
        xaxis: {
            categories: [
                "Aptitude",
                "Verbal",
                "Reasoning",
                "Emotional Intelligence",
                "Personality Test",
                "SJT's",
            ],
           
        },
       
    }
};



const Progress = () => {
    return (
        <div className=" lg:mt-[80px] lg:min-h-screen flex justify-between flex-col" >
            <div className="bg-white mb-6 border-2 border-solid shadow-2xl relative  px-8 p-5 rounded-xl">
                <Chart {...pieChartConfig} />
                <div className="flex justify-between">
                    <h1 className="text-center flex flex-col items-center justify-center">
                        <p1 className="font-bold">
                            100/100
                        </p1>
                        <p1 className="text-sm font-medium">
                            Questions attempted in the test
                        </p1>
                    </h1>
                    <h1 className="text-center flex flex-col items-center justify-center">
                        <p1 className="font-bold">
                            0/100
                        </p1>
                        <p1 className="text-sm font-medium">
                            Questions didn’t attempted in test
                        </p1>
                    </h1>
                </div>
            </div>
            <div className="bg-white h-[] border-2 mb-6 border-solid shadow-2xl relative  px-8 p-5 rounded-xl">
            <Chart {...barGraphConfig} />

            </div>
        </div>
    );
};

export default Progress;
