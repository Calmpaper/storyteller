import { useState } from 'react'

const AddButton = () => {
  const [showAddDropdown, setShowAddDropdown] = useState(false)

  return (
    <div
      data-hover
      data-delay={0}
      className="w-dropdown"
      onClick={() => setShowAddDropdown(!showAddDropdown)}
    >
      <div
        className="dropdown-toggle w-dropdown-toggle"
        id="w-dropdown-toggle-0"
        aria-controls="w-dropdown-list-0"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex={0}
      >
        <a className="kerou fsc w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/5f9235924878501c92cf0d4c/5f93787df5bd1b3ba7d75c21_plus.svg"
            width={36}
            alt=""
            className="image-288"
          />
          <div className="text-block-212">Add</div>
        </a>
      </div>
      <nav
        className={`dropdown-list-2 w-dropdown-list ${
          showAddDropdown ? ' w--open' : ''
        }`}
        id="w-dropdown-list-0"
        aria-labelledby="w-dropdown-toggle-0"
      >
        <a href="#" className="dropdown-link-2 w-dropdown-link" tabIndex={0}>
          + Add Chapter
        </a>
        <a href="#" className="dropdown-link-2 w-dropdown-link" tabIndex={0}>
          + Add @Character
        </a>
        <a href="#" className="dropdown-link-2 w-dropdown-link" tabIndex={0}>
          + Add $Others
        </a>
      </nav>
    </div>
  )
}

export default AddButton
