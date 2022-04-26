const SearchBar = ({ data }) => {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    // const newFilter = data.filter((value) => {
    //   return value.includes(searchWord);
    // });
    // setFilteredData(newFilter);
  };

  return (
    <input
      type="text"
      placeholder="Type a command or search..."
      onChange={handleFilter}
      focus
    />
  );
};

export default SearchBar;
