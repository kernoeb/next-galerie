import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData} from '../pages/api/pic.js'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';


const ImageGridList = props => {
    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
            return 3;
        }

        if (isWidthUp('lg', props.width)) {
            return 3;
        }

        if (isWidthUp('md', props.width)) {
            return 3;
        }

        if (isWidthUp('sm', props.width)) {
            return 2
        }

        if (isWidthUp('xs', props.width)) {
            return 2
        }
        return 3;
    }

    const getCellHeight = () => {
        if (isWidthUp('xl', props.width) || isWidthUp('lg', props.width) || isWidthUp('md', props.width) || isWidthUp('sm', props.width)) {
            return 300;
        }

        if (isWidthUp('xs', props.width)) {
            return 200;
        }
        return 300;
    }

    return (
        <GridList spacing={5} cellHeight={getCellHeight()} cols={getGridListCols()}>
            {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={1}>
                    <img src={'/assets/' + tile.img} alt={tile.title}/>
                </GridListTile>
            ))}
        </GridList>
    );
}
export default withWidth()(ImageGridList);
