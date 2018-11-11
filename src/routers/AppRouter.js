import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header';
import expense_dashboard from '../components/Dashboard';
import add_expense_dashboard from '../components/AddExpense';
import edit from '../components/Edit';
import help from '../components/Help';
import notFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={expense_dashboard} exact/>
                    <Route path="/create" component={add_expense_dashboard}/>
                    <Route path="/edit/:id" component={edit}/>
                    <Route path="/help" component={help}/>
                    <Route component={notFound}/>
                </Switch>
        </div> 
    </BrowserRouter>
)

export default AppRouter;