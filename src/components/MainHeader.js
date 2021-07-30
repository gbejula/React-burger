import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Grand Prix</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/products'>Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
