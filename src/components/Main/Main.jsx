import React,{useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
const Main= ()=> {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by speechly" />
            <CardContent>
            <Typography align="center" variant="h5">₹{balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:'20px'}}>
                {/*InfoCArd...*/}
                Try saying "Add expense" for ₹100 in category salaray for monday
            </Typography>
            <Divider/>
            <Form/>
            </CardContent>    

            <CardContent className={classes.cardContent}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                     <List/>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main
