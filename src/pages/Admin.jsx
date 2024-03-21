import React from 'react';
import Category from '../components/templates/Category';
import CategoryList from '../components/templates/CategoryList';

const Admin = () => {
    return (
        <div>
            <CategoryList/>
            <Category/>
        </div>
    );
}

export default Admin;
