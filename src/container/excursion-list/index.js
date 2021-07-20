import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import * as ExcursionSelectors from "../../store/excursion/selector";
import './styles.scss';

export default function ExcursionList(props) {

    const excursions = useSelector(ExcursionSelectors.toArray)
    const excursionsByAgencyName = useSelector(ExcursionSelectors.excursionsByAgencyName)
    console.log(excursionsByAgencyName, 'excursionsByAgencyName')

    return <div className="container">
        {
            excursionsByAgencyName.map((ex, index) =>
                <Paper key={index} classes={{ root: 'paper-root' }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>{ex.name.charAt(0)}</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{ex.destination}</Typography>
                            <Typography>{new Date(Number(ex.date)).toLocaleDateString('pt-BR')}</Typography>
                        </Grid>
                    </Grid>
                </Paper>)
        }
    </div>
}