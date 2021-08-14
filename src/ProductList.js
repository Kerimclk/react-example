import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';

export default class ProductList extends Component {
    addToCart = (product)=>{
        
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units In Stock</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                this.props.products.map(p=>(
                                    <tr key="{p.id}">
                                        <th scope="row">{p.id}</th>
                                        <td>{p.productName}</td>
                                        <td>{p.unitPrice}</td>
                                        <td>{p.quantityPerUnit}</td>
                                        <td>{p.unitsInStock}</td>
                                        <td><Button color="info">add</Button></td>
                                    </tr>
                                ))
                            }
                        </tr>
                    </tbody>
                    </Table>
            </div>
        )
    }
}
