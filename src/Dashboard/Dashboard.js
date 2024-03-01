import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const Dashboard = () => {
    return (
        <div className="container dashboard">
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <div>
                        <Typography variant="h1">Hello vignesh</Typography>
                        <Typography variant="h5">Supreme Mobiles</Typography>
                    </div>
                </Grid>
                <Grid item md={4}></Grid>
                <Grid item md={4}>
                    <div>
                        <Typography variant="body1">Need to add Unlimited products/categories?</Typography>
                        <Button variant="contained" color="warning" style={{ borderRadius: '50px' }}>Go Premium</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;

