import React from 'react'
import { useParams } from 'react-router-dom';
import ProductDescHeader from '../../components/ProductDescHeader'
import ProductDescBody from './../../components/ProductDescBody/index';

export default function ProductDesc() {
  const { id } = useParams<{ id: string }>();

  console.log(">>>>>id", id)

    return (
        <div>
            <ProductDescHeader/>
            <ProductDescBody/>
        </div>
    )
}
