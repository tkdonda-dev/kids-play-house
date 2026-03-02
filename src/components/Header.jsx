// Header.jsx
const Header = () => {
    return (
        <header className="frame frame--header">
            <h1 className="frame__title">
                <a href="https://tympanus.net/codrops/demos/?tag=scroll">#Scroll-based</a>{' '}
                SVG{' '}
                <a href="https://tympanus.net/codrops/demos/?tag=filter">#Filter</a>{' '}
                Animations On{' '}
                <a href="https://tympanus.net/codrops/demos/?tag=typography">#Text</a>
            </h1>
            <nav className="frame__links">
                <a href="https://tympanus.net/codrops/?p=80141">Article</a>
                <a href="https://tympanus.net/codrops/demos/">All demos</a>
                <a href="https://github.com/codrops/OnScrollSVGFilterText/">GitHub</a>
            </nav>
        </header>
    );
};

export default Header;
