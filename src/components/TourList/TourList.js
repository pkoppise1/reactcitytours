import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import './tourData'
import { tourData } from './tourData'

export default class TourList extends Component {
    state={
        Tours:tourData
    }
    closeTour=(id)=>{
        console.log(id);
        const Tours=this.state.Tours;
        const sortedFilter=Tours.filter(tr=>tr.id!==id);
        this.setState({
            Tours:sortedFilter
        })
    }
    render() {
        
        let trs=this.state.Tours;
        console.log(trs);
        return (
            <section className='TourList'>
                

{ trs.map((item, index) => (<Tour trItem={item} key={item.id} closeTour={this.closeTour}></Tour>
//<li key={index}>{item.id}</li>
    )) }

      
               
            </section>
        )
    }
}
