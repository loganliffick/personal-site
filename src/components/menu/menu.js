import React, { useState, useEffect, useRef } from 'react';
import initialDetails from './data';

let selectedEntry = 1;
const entries = '';
let mouseSelect;

const entrySelector = (direction) => {
  const results = document.querySelector('.results');

  entries.forEach((entry) => {
    document.getElementById(entry.id).ariaSelected = false;
  });

  if (direction === 'up' && selectedEntry > 1) {
    selectedEntry = selectedEntry - 1;
  } else if (direction === 'down' && selectedEntry <= entries.length) {
    if (selectedEntry === entries.length) {
      selectedEntry = 1;
    } else {
      selectedEntry = selectedEntry + 1;
    }
  } else if (direction === 'reset') {
    selectedEntry = 1;
  } else if (direction === mouseSelect) {
    selectedEntry = parseInt(mouseSelect);
  }

  results.ariaActiveDescendant = selectedEntry;
  document.getElementById(selectedEntry).ariaSelected = true;
  document.getElementById(selectedEntry).scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
};

const MenuEntry = ({ entry }) => {
  let classNames = '';
  if (entry.new) {
    classNames += 'tag';
  }

  if (entry.divider) {
    return (
      <p className="tiny entry-divider" id={entry.title}>
        {entry.title}
      </p>
    );
  } else {
    return (
      <a
        className={'entry'}
        href={entry.link}
        target="_blank"
        aria-selected="false"
        role="option"
        onMouseEnter={(e) => {
          mouseSelect = e.target.id;
          entrySelector(mouseSelect);
        }}
      >
        <p className={classNames}>{entry.title}</p>
      </a>
    );
  }
};

const SearchList = ({ filteredEntries }) => {
  const filtered = filteredEntries.map((entry) => (
    <MenuEntry key={entry.title} entry={entry} />
  ));
  return <>{filtered}</>;
};

const Search = (props) => {
  const [searchField, setSearchField] = useState('');
  const { details } = props;

  const filteredEntries = details.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(searchField.toLowerCase()) ||
      entry.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const searchList = () => {
    return (
      <div className="results" role="listbox">
        <SearchList filteredEntries={filteredEntries} />
      </div>
    );
  };

  // assigns entry ids
  useEffect(() => {
    entries = document.querySelectorAll('.entry');
    let num = 0;
    entries.forEach((entry) => {
      num = num + 1;
      entry.id = num;
    });

    if (num > 0) {
      entrySelector('reset');
    }

    return () => {
      entries.length;
    };
  }, [handleChange]);

  return (
    <>
      <input
        autoComplete="false"
        className="search"
        onChange={handleChange}
        placeholder="What can I help you find..."
        ref={props.ir}
        tabIndex={0}
        type="text"
      />
      {searchList()}
    </>
  );
};

const Menu = () => {
  const [toggle, setToggle] = useState(0);
  const inputRef = useRef(null);

  const downHandler = (e) => {
    if (e.key === 'k' && e.getModifierState('Meta')) {
      setToggle(!toggle);
    } else if (e.key === 'Escape') {
      setToggle(false);
    }

    if (toggle) {
      if (e.key === 'Enter') {
        document.getElementById(selectedEntry).click();
      } else if (
        e.key === 'ArrowUp' ||
        (e.key === 'Tab' && e.getModifierState('Shift'))
      ) {
        e.preventDefault(); // keeps from double tabbing
        entrySelector('up');
      } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault(); // keeps from double tabbing
        entrySelector('down');
      }
    }
  };

  // for keystrokes
  useEffect(() => {
    document.addEventListener('keydown', downHandler);

    if (toggle) {
      setTimeout(() => {
        inputRef.current.focus();
        entrySelector('reset');
      }, 50);
    } else {
      document.querySelector('.search').value = '';
    }

    return () => {
      document.removeEventListener('keydown', downHandler);
    };
  }, [toggle]);

  return (
    <>
      <div
        className="overlay"
        populate={toggle.toString()}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <div className="menu" populate={toggle.toString()}>
        <Search ir={inputRef} details={initialDetails} />
      </div>
      <button
        className="info-button"
        populate={toggle.toString()}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Info
      </button>
    </>
  );
};

export default Menu;
