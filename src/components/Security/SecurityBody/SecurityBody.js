import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { AddAuthor } from '../../../layouts/AddAuthor/AddAuthor';
import { AddBook } from '../../../layouts/AddBook/AddBook';
import { MyAccount } from '../../../layouts/MyAccount/MyAccount';
import { Security } from '../../../layouts/Security/Security';
import { Settings } from '../../../layouts/Settings/Settings';
import './SecurityBody.scss';

export const SecurityBody = () => {
  const [theme] = useTheme();
	return (
		<div className={`security__body ${theme}`}>
			<Routes>
        <Route path='my-account' element={<MyAccount/>} />
        <Route path='change' element={<Security/>} />
        <Route path='settings' element={<Settings/>} />
        <Route path='add-author' element={<AddAuthor/>} />
        <Route path='add-book' element={<AddBook/>} />
      </Routes>
		</div>
	);
};
