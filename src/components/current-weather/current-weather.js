import React from 'react'
import { MdSunny } from "react-icons/md";

function currentWeather({data}) {
  return (
    <div className='lg:flex justify-center items-center'>
        <div className='border border-black m-11 w-72 rounded-2xl bg-chose-20 text-white shadow-2xl lg:w-96 p-4 space-x-1 lg:shadow-2xl'>  
            <div className='flex justify-between items-center font-bold'>
                <div>
                    <p className='space-x-10'>{data.city}</p>
                    <p>{data.weather[0].description}</p>
                </div>    
                {/* <MdSunny className='w-24 h-24 text-yellow-500'/> */}
                <img alt='weather' src={`icons/${data.weather[0].icon}.png`} className='text-xs font-thin'/>
            </div>
            <div className='flex justify-between item-center'>
                <p className='text-5xl lg:text-7xl font-bold'>{Math.round(data.main.temp)}°C</p>
                <div className='text-xs font-medium'>
                    <div className='mt-5'>
                        <span>Details</span>
                    </div>
                    <div className='space-x-6 pt-1 lg:space-x-20  font-sans'>
                        <span>Feels like</span>
                        <span>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='space-x-12 pt-1 lg:space-x-25 font-sans '>
                        <span>Wind</span>
                        <span>{Math.round(data.wind.speed)}</span>
                    </div>
                    <div className='space-x-6 pt-1 lg:space-x-20 font-sans '>
                        <span>Humidity</span>
                        <span>{data.main.humidity}%</span>
                    </div>
                    <div className='space-x-6 pt-1 lg:space-x-20 font-sans '>
                        <span>Pressure</span>
                        <span>{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default currentWeather