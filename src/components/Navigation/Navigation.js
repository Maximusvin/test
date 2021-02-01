import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>
      <NavLink to="/clock" className={s.link} activeClassName={s.activeLink}>
        Таймер
      </NavLink>
      <NavLink to="/color" className={s.link} activeClassName={s.activeLink}>
        Колорпикер
      </NavLink>
      <NavLink to="/counters" className={s.link} activeClassName={s.activeLink}>
        Счетчики
      </NavLink>
      <NavLink
        to="/phone-book"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Телефонная книга
      </NavLink>
      <NavLink
        to="/table-fiends"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Таблица контактов
      </NavLink>
      <NavLink to="/table" className={s.link} activeClassName={s.activeLink}>
        Таблица
      </NavLink>
      <NavLink to="/router" className={s.link} activeClassName={s.activeLink}>
        React Router
      </NavLink>
    </nav>
  );
}
