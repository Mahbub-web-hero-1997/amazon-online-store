import React from 'react';
import { Helmet } from 'react-helmet-async';

const UseTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}-amazone-online-store</title>
            </Helmet>
        </div>
    );
};

export default UseTitle;