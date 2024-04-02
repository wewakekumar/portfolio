interface SearchProps extends React.HTMLProps<HTMLInputElement> {}

const Search: React.FC<SearchProps> = (props) => {
  const { placeholder } = props;
  return (
    <input
      className="rounded text-secondary bg-lightBackGround pl-4 w-32"
      type="text"
      placeholder={placeholder || "Search"}
    />
  );
};

export default Search;
