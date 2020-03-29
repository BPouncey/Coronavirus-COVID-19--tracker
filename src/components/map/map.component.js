import React, { useEffect, useState } from 'react'

import { Chart } from "react-google-charts"

import Footer from '../footer/footer.component'
import MapMenuWidget from '../map-menu/map-menu.component'

import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import AssessmentIcon from '@material-ui/icons/Assessment'

import { useStyles } from './map.styles'

const Map = ({ aboutWindow, setAboutWindow, newsWindow, setNewsWindow, statsWindow, setStatsWindow, isMobile }) => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
    
        const result = await fetch(
            `https://corona.lmao.ninja/countries`
        )
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        }else{
            setData(data)
            console.log("novelCOVID DATA", data)
        }
        setLoading(false)
    }

    const countryArr = data.map((item, index) => {
        if(item.country == "UK"){
            return ["United Kingdom", item.cases, item.deaths]
        }else{
            return [item.country, item.cases, item.deaths]
        }
    })

    let countriesData = [
        ['Country', 'Cases', 'Deaths'],
        ...countryArr,
    ]

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={classes.map} >
                {isLoading ? (
                    <CircularProgress
                        className={classes.loader}
                        color={'secondary'}
                        size={70}
                    />
                ):(
                    <div>
                        <div className={classes.menuContainer} >
                            <IconButton>
                                <InfoIcon
                                    className={classes.navIcon}
                                    onClick={() => {
                                    
                                        setAboutWindow(!aboutWindow)
                                    }}
                                />
                            </IconButton>
                    
                            <IconButton>
                                <PriorityHighIcon
                                    className={classes.navIcon}
                                    onClick={() => {
                                        setNewsWindow(!newsWindow)
                                    }}
                                />
                            </IconButton>

                            <IconButton>
                                <AssessmentIcon
                                    className={classes.navIcon}
                                    onClick={() => {
                                        setStatsWindow(!statsWindow)
                                    }}
                                />
                            </IconButton>
                            <MapMenuWidget />
                        </div>
                  

                   
                    <div className={classes.chart} >
                        <Chart
                            // forceIFrame={true}
                            width={'65vw'}
                            height={'77.7vh'}
                            chartType="GeoChart"
                            data={countriesData}
                            mapsApiKey={process.env.YOUR_KEY}
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                colorAxis: {
                                    colors: [
                                        '#FEEDED','#FB7F81',
                                        '#FB4146','#FA030B',
                                        '#FB040C','#BC0309',
                                        '#7D0206'
                                    ]
                                },
                                backgroundColor: '#81d4fa',
                                // datalessRegionColor: 'blue',
                            }}/>
                        </div>
                    </div>
                )}
            </div>
            <Footer
                setAboutWindow={setAboutWindow}
                aboutWindow={aboutWindow}
                isMobile={isMobile}
            />
        </div>
    )
}

export default Map

   