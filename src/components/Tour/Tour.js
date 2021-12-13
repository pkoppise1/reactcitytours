import React, { Component } from 'react'
import './Tour.scss'

export default class Tour extends Component {
    state={
        showInfo: false
    }
    handleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    };
    
    render() {
    const {closeTour}=this.props;

        console.log(this.props.trItem);
        let tour1=this.props.trItem;
        return (
             <article className='Tour' >
                <div className='TourImg'>
                    <img src={tour1.img} alt=''></img>
                    <span onClick={()=>closeTour(tour1.id)} className='close-btn'><i class="fas fa-window-close"></i></span>
                </div>
                <div className='TourInfo'>
                <h3 className='TourCity'>{tour1.city}</h3>
                <h4 className='TourName'>{tour1.name}</h4>
                <h5>  Info <span onClick={this.handleInfo }><i class="fas fa-caret-square-down"></i></span>
                { this.state.showInfo ? <p className='TourInfo'>{tour1.info}</p> : null }
                    
                   
                </h5>
                </div>

            </article>
        )
    }
}
