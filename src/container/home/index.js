import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ExcursionList from '../excursion-list';

import useFetching from "../../hooks/useFetching";
import * as AgencyActions from "../../store/agency/action";
import * as ExcustionActions from "../../store/excursion/action";


export default function ClippedDrawer() {
    useFetching(AgencyActions.fetchAgencies)
    useFetching(ExcustionActions.fetchExcursions)

    return (
        <div className='container'>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        BagagIn
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Toolbar />
                <ExcursionList />
            </main>
        </div>
    );
}
