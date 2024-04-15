import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel,AccordionItemButton } from 'react-accessible-accordion'

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
function forecast({data}) {
    const dayInWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInWeek,WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek))
    console.log(forecastDays)
  return (
    <div>
        <label className='text-white font-extrabold text-xl lg:text-3xl lg:ml-4'>Forecast</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=>(
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton className=' lg:p-4'>
                            <div className='flex flex-1 space-x-2 bg-white text-black pl-1 lg:pl-11 lg:space-x-6 border border-black mt-3 rounded-md shadow-sm h-16'>
                                <img alt=' weather' src={`icons/${item.weather[0].icon}.png`}/>
                                    <div className='mt-5'>
                                        <label className='tracking-tight font-semibold'>{forecastDays[idx]}</label>
                                    </div>
                                <div className='flex flex-1 justify-evenly space-x-16 mt-5 text-sm float-none lg:'>
                                    
                                    <div>
                                    <label className='tracking-tight font-light lg:font-normal'>{item.weather[0].description}</label>
                                    </div>
                                    <div>
                                        <label className='tracking-tight font-extralight'>
                                            {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                                        </label>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='grid justify-between border border-gray-400 bg-white text-black rounded-lg m-3'>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Pressure : </label>
                                <label>{item.main.pressure}</label>
                            </div>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Humidity : </label>
                                <label>{item.main.humidity}</label>
                            </div>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Clouds : </label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Wind speed : </label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Sea level : </label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className='m-1 p-1 space-x-1'>
                                <label className='font-semibold'>Feels Like : </label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                
            ))}
            <AccordionItem></AccordionItem>
        </Accordion>
    </div>
    
  )
}

export default forecast