import React from "react";


export const SearchBar = ({
    id,
    onChange,
    items = ["Anna", "Bob", "Claire", "Dave"],
}) => {
    return (
        <div>
            <input
                className="d-flex search"
                type="text"
                defaultValue="Name, phone, email"
                id={id}
                onChange={onChange}
            />
            <ul>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;