import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return <div>

        <nav className="bg-white w-full">
            <div className="flex flex-row justify-between"> 
                <h1 className="flex font-display text-6xl uppercase">DynamicRare</h1>
            <div className="flex justify-between space-x-4 right-0">
                <button className="flex font-display bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Number Redeemed</button>
                <button className="font-display bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">Buy</button>
            </div>
            </div>
        </nav>
        </div>
    }
  }

  export default Header