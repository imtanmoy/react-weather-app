import React from 'react';

module.exports = {
    renderForecastImage(icon : string) {
        var image : number;
        switch (icon) {
            case '01d':
                image = require('../../assets/icons/day.svg');
                break;
            case '01n':
                image = require('../../assets/icons/night.svg');
                break;
            case '02d':
                image = require('../../assets/icons/cloudy-day-1.svg');
                break;
            case '02n':
                image = require('../../assets/icons/cloudy-night-1.svg');
                break;
            case '03d':
                image = require('../../assets/icons/cloudy-day-2.svg');
                break;
            case '03n':
                image = require('../../assets/icons/cloudy-night-2.svg');
                break;
            case '04d':
                image = require('../../assets/icons/cloudy-day-3.svg');
                break;
            case '04n':
                image = require('../../assets/icons/cloudy-night-3.svg');
                break;
            case '09d':
                image = require('../../assets/icons/rainy-1.svg');
                break;
            case '09n':
                image = require('../../assets/icons/rainy-1.svg');
                break;
            case '10d':
                image = require('../../assets/icons/rainy-6.svg');
                break;
            case '10n':
                image = require('../../assets/icons/rainy-6.svg');
                break;
            case '11d':
                image = require('../../assets/icons/thunder.svg');
                break;
            case '11n':
                image = require('../../assets/icons/thunder.svg');
                break;
            case '13d':
                image = require('../../assets/icons/snowy-5.svg');
                break;
            case '13n':
                image = require('../../assets/icons/snowy-5.svg');
                break;
            case '50d':
                image = require('../../assets/icons/cloudy.svg');
                break;
            case '50n':
                image = require('../../assets/icons/cloudy.svg');
                break;
            default:
                return;
        }

        return (<img src={image} alt="forcaset"/>);
    }
}
