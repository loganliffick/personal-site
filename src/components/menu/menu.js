import React, { useState, useEffect } from 'react';

// let tab = 0;
const shortcuts = ['a', 'b', 'c'];
const menuItems = [];

const MenuGroup = (props) => (
  <div className="menu-group">
    <p className="tiny">{props.title}</p>
    <div className="divider" />
    <div className="menu-entry-container">{props.children}</div>
  </div>
);

const MenuEntry = (props) => {
  let classNames = '';
  if (props.new === true) {
    classNames += 'tag';
  }

  return (
    <a
      // className={'menu-entry ' + props.number}
      className={'menu-entry'}
      href={props.link}
      target="_blank"
      id={props.shortcut}
      // onMouseEnter={(e) => {
      //   e.target.focus();
      //   let string = e.target.classList[1].toString();
      //   tab = parseFloat(string[9]);
      // }}
    >
      <p className={classNames}>{props.title}</p>
    </a>
  );
};

const Menu = () => {
  const [toggle, setToggle] = useState(0);

  const downHandler = ({ key }) => {
    if (key === 'k' && event.getModifierState('Meta')) {
      setToggle(!toggle);
    } else if (key === 'Escape') {
      setToggle(false);
    }
    //   else if (shortcuts.includes(key) && toggle === false) {
    //   document.getElementById(key).click(); // might delete this
    // } else if (key === 'ArrowUp' && toggle === true) {
    //   event.preventDefault();
    //   tabChange('up');
    // } else if (key === 'ArrowDown' && toggle === true) {
    //   event.preventDefault();
    //   tabChange('down');
    // }
  };

  // const upHandler = () => {
  //   log = [];
  // };

  // const tabChange = (direction) => {
  //   if (direction === 'down' && tab < menuItems.length - 1) {
  //     tab = tab + 1;
  //     document.querySelector('.menuItem-' + [tab]).focus();
  //   } else if (direction === 'up' && tab > 0) {
  //     tab = tab - 1;
  //     document.querySelector('.menuItem-' + [tab]).focus();
  //   }
  // };

  // future search hook
  // useEffect(() => {
  //   let entries = document.querySelectorAll('.menu-entry');
  //   for (let i = 0; i < entries.length; i++) {
  //     // searchData.push(entries[i].children[0].innerHTML);
  //     menuItems.push('menuItem-' + i);
  //     entries[i].classList.add('menuItem-' + i);
  //   }
  // }, []);

  // key handler hook
  useEffect(() => {
    document.addEventListener('keydown', downHandler);
    // if (toggle === true) {
    //   setTimeout(() => {
    //     tab = 0;
    //     document.querySelector('.menuItem-' + 0).focus(); // set initial focus element
    //   }, 50);
    // }

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
        {/* <SearchBar /> */}
        <MenuGroup title="Works">
          <MenuEntry
            title="keybored"
            tag
            link="https://keyboredjs.com"
            shortcut={shortcuts[0]}
            new
          />
          <MenuEntry
            title="spltjs"
            link="https://spltjs.com"
            shortcut={shortcuts[1]}
          />
          <MenuEntry
            title="DigitalOcean"
            link="https://digitalocean.com"
            shortcut={shortcuts[2]}
          />
          <MenuEntry
            title="Peekaboo"
            link="https://peekabooi.cyou"
            shortcut={shortcuts[3]}
          />
        </MenuGroup>
        <MenuGroup title="Recognition">
          <MenuEntry
            title="One Page Love — spltjs"
            tag
            link="https://onepagelove.com/splt-js"
          />
          <MenuEntry
            title="W3 — PRPL"
            link="https://www.w3award.com/winners/list/view/?event=1037&award=4"
          />
          <MenuEntry
            title="Awwwards SOTD — PRPL"
            link="https://www.awwwards.com/sites/purple-rock-scissors"
          />
          <MenuEntry
            title="One Page Love — Blackformat"
            link="https://onepagelove.com/blackformat"
          />
          <MenuEntry
            title="Minimal Gallery — Blackformat"
            link="https://minimal.gallery/blackformat/"
          />
          <MenuEntry
            title="Nice, Very Nice — Blackformat"
            link="https://www.niceverynice.com/stories/font-pairings"
          />
        </MenuGroup>
        <MenuGroup title="Elsewhere">
          <MenuEntry title="Twitter" link="https://twitter.com/logan_liffick" />
          <MenuEntry title="Github" link="https://github.com/loganliffick" />
          <MenuEntry title="Read.cv" link="https://read.cv/loganliffick" />
          <MenuEntry title="Codepen" link="https://codepen.io/loganliffick" />
          <MenuEntry
            title="Dribbble"
            link="https://dribbble.com/loganliffick"
          />
          <MenuEntry
            title="Instagram"
            link="https://instagram.com/loganliffick"
          />
          <MenuEntry
            title="LinkedIn"
            link="https://linkedin.com/loganliffick"
          />
        </MenuGroup>
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
