import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"Ameer"
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }
    componentDidMount()
    {
        console.log('LifecycleA componentDidMount')
    }
  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>Lifecycle A </div>
            <LifecycleB></LifecycleB>
        </div>
        
    )
  }
}

export default LifecycleA