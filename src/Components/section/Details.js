import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'

export class Details extends Component {
    static contextType = DataContext;

    state = {
        products:[]
    }

    getProduct = () => {
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id 
            })
            this.setState({
                products:data,
            })
        }
    };

    componentDidMount(){
        this.getProduct()
    }

    render() {
        const {products} = this.state;
        const {addCart} = this.context;
        return (
            <>
            {
                products.map(item => (
                    <div className="details" key = {item._id}>
                        <img src = {item.src} />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors colors = {item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                               Add to card
                            </Link>
                        </div>
                    </div>
                ))
            }
            </>
        )
    }
}

export default Details
