import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import New from './New';

const ListNews = ({lstNews}) => {
    return (
        <Fragment>
            <div className="row">
                {
                    lstNews.map(item => {                        
                        return <New key={item.url} theNew={item}/>
                    })
                }

            </div>
        </Fragment>
    );
}

ListNews.protoTypes = {
    lstNews: PropTypes.array.isRequired
}

export default ListNews;