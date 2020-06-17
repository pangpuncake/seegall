import React from 'react'
import NavigationItem from '../../Layout/Navigation/NavigationItems/NavigationItem/NavigationItem'

const Sidebar = () => {
    return (
        <div style = {{backgroundColor: 'slategrey', width: '20%'}}>
            <ul>
                <NavigationItem link = "/forum/home">Home</NavigationItem>
                <NavigationItem link = "/forum">Create Post</NavigationItem>
                <NavigationItem link = "/forum/tags">Tags</NavigationItem>
                <NavigationItem link = "/forum/popular">Popular</NavigationItem>
                <NavigationItem link = "/forum/latest">Latest</NavigationItem>
            </ul>
        </div>
    )
}

export default Sidebar