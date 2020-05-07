import React from 'react'
import { Switch, Route, Redirect } from 'react-router'




export default props => 
        <Switch>
            <Route exact path='/' />
            <Route path='/users' />
        </Switch>