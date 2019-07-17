var data = [
    {
        x: ['Brazil', 'Germany'],
        y: [0.3885, 0.1451],
        type: 'bar'
    }
];

var layout = {
    title: 'Hectares Arable Land Per Person 2015',
    xaxis: {
        title: 'country',
    },
    yaxis: {
        title: 'hectares per person'
    }
};

Plotly.newPlot('plot2', data, layout)