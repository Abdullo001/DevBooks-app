import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import './SecurityNav.scss';
export const SecurityNav = () => {
	const [theme] = useTheme();
	const { t } = useTranslation();
	return (
		<div className={`security ${theme}`}>
			<ul className='security__list'>
				<li className={`security__item ${theme}`}>
					<NavLink
						to='my-account'
						className={({ isActive }) =>
							isActive
								? `security__link security__active ${theme}`
								: `security__link ${theme}`
						}>
						<span>1</span>
						<p className='security__desc'>{t('account.my_account')}</p>
					</NavLink>
				</li>
				<li className='security__item'>
					<NavLink
						to='change'
						className={({ isActive }) =>
							isActive
								? `security__link security__active ${theme}`
								: `security__link ${theme}`
						}>
						<span>2</span>
						<p className='security__desc'>{t('security.security')}</p>
					</NavLink>
				</li>
				<li className='security__item'>
					<NavLink
						to='settings'
						className={({ isActive }) =>
							isActive
								? `security__link security__active ${theme}`
								: `security__link ${theme}`
						}>
						<span>3</span>
						<p className='security__desc'>{t('settings.settings')}</p>
					</NavLink>
				</li>
				<li className='security__item'>
					<NavLink
						to='add-author'
						className={({ isActive }) =>
							isActive
								? `security__link security__active ${theme}`
								: `security__link ${theme}`
						}>
						<span>4</span>
						<p className='security__desc'>{t('addAuthor.addAuthor')}</p>
					</NavLink>
				</li>
				<li className='security__item'>
					<NavLink
						to='add-book'
						className={({ isActive }) =>
							isActive
								? `security__link security__active ${theme}`
								: `security__link ${theme}`
						}>
						<span>5</span>
						<p className='security__desc'>{t('addBook.addBook')}</p>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
