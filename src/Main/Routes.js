import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import User from '../Components/User/User'
import Home from '../Components/Home/Home'
import Books from '../Components/Book/Books'




export default props => 
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={User}/>
            <Route path='/books' component={Books} />
        </Switch>