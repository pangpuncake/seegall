import React, { Component } from 'react'
import FullPost from '../FullPost/FullPost'
import { Switch, Route } from 'react-router-dom';
import Posts from './Posts/Posts'

class Home extends Component  {

    render () {
        return (
            <div>
                <section>
                    <Switch>
                        <Route path = '/forum/home' exact component = { Posts } />
                        <Route path={this.props.match.url + '/:id'} exact component={ FullPost } />
                    </Switch>
                </section>
                
            </div>
        )
    }
}

export default Home;
