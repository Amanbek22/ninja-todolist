import css from "./Header.module.css"

const Header = (props) => {
    return <header className={css.header}>
        Todos ({props.compleateTodos} / {props.todosLen})
    </header>
}

export default Header

