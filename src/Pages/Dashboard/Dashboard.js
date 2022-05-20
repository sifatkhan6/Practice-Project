import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col sm:justify-items-center">
                <h2 className='text-secondary font-bold text-4xl'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My Appointments</Link></li>
                    <li><Link to={'/dashboard/review'}>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;