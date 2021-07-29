import React, { Component } from 'react';
import axios from 'axios';
import './ImageSliderApp.css'
import ButtonSlider from '../Button/Button'

class ImageSliderApp extends Component{

    state = {
        image : [],
        id : 1,
        length : 0
    }

    componentDidMount(){
        axios.get("images.json")
        .then(res => {
            this.setState({
                image : res.data.find(obj => obj.id === 1).url,
                length : res.data.length
            })
        })
        .catch(console.error());
        this.timerId = setInterval(() => this.nextImg(this.state.id), 3500);
    }

    componentDidUpdate(){
        axios.get("images.json")
        .then(res => {
            this.setState({
                image : res.data.find(obj => obj.id === this.state.id).url
            })
        })
        .catch(console.error());
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    nextImg(id){
        if(id === this.state.length){
            this.setState({
                id : 1
            })
        }
        else{
            this.setState({
                id : id + 1
            })
        }
    }

    prevImg(id){
        if(id === 1){
            this.setState({
                id : this.state.length
            })
        }
        else{
            this.setState({
                id : id - 1
            })
        }
    }

    moveDot(id){
        this.setState({
            id : id
        })
    }

    render(){
        return(
            <div className="container-slider">
                <img alt="" src={this.state.image} />
                <ButtonSlider moveSlide={() => this.prevImg(this.state.id)} direction="left"/>
                <ButtonSlider moveSlide={() => this.nextImg(this.state.id)} direction="right"/>
                <div className="container-dots">
                    {Array.from({length: 5}).map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => this.moveDot(index + 1)}
                            className={this.state.id === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div> 
            </div>
        );
    }
}

export default ImageSliderApp;


