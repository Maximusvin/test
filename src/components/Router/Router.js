import { NavLink } from 'react-router-dom';
import s from './Router.module.css';

export default function Router() {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/router/"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Главная
      </NavLink>
      <NavLink
        to="/router/authors"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Авторы
      </NavLink>
      <NavLink
        to="/router/books"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Книги
      </NavLink>
    </nav>
  );
}
