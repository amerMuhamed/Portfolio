import React from 'react';
import Navbar from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main> {/* padding علشان الـ Navbar الثابت */}
    </>
  );
};

export default AdminLayout;
