import React from 'react'
import { Switch, Route } from 'react-router'
import User from '../Components/User/User'
import Home from '../Components/Home/Home'
import Books from '../Components/Book/Books'
import Register from '../Components/Home/Register'



export default props => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={User} />
            <Route path='/books' component={Books} />
            <Route path='/register' component={Register} />
        </Switch>
)
