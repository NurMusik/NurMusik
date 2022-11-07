
const SearchBar = () => {
    const handleKeyDown = event => {
        if (event.key == "Enter") {
            console.log();
        }
        console.log('User pressed: ', event.key);
    };

    return (
        <div>
            <input type="search" placeholder="Enter Radio Name:" onKeyDown={handleKeyDown}></input>
        </div>
    );
}

export default SearchBar;
