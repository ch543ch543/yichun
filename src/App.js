import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const [links, setLinks] = useState([
    { id: 1, link: "https://phantom.land/work/" },
    { id: 2, link: "https://www.google.com" },
    { id: 3, link: "https://www.twitter.com" },
    { id: 4, link: "https://www.facebook.com" },
    { id: 5, link: "https://www.yahoo.com" },
    { id: 6, link: "https://www.microsoft.com" },
    { id: 7, link: "https://phantom.land/work/" },
    { id: 8, link: "https://www.google.com" },
    { id: 9, link: "https://www.twitter.com" },
    { id: 10, link: "https://www.facebook.com" },
    { id: 11, link: "https://www.yahoo.com" },
    { id: 12, link: "https://www.microsoft.com" },
    { id: 13, link: "https://phantom.land/work/" },
    { id: 14, link: "https://www.google.com" },
    { id: 15, link: "https://www.twitter.com" },
    { id: 16, link: "https://www.facebook.com" },
    { id: 17, link: "https://www.yahoo.com" },
    { id: 18, link: "https://www.microsoft.com" },
    { id: 19, link: "https://www.microsoft.com" },
    { id: 20, link: "https://phantom.land/work/" },
    { id: 21, link: "https://www.google.com" },
    { id: 22, link: "https://www.twitter.com" },
    { id: 23, link: "https://www.facebook.com" },
    { id: 24, link: "https://www.yahoo.com" },
    { id: 25, link: "https://www.microsoft.com" },
  ]); //all bookmarks
  const [shownLinks, setShownLinks] = useState([]); //bookmarks that should be shown on the current page number
  const [showPagination, setShowPagination] = useState(false); //show pagination or not
  const [currentPage, setCurrentPage] = useState(1); //current page number
  const [pageNum, setPageNum] = useState([1]); //total page number
  const [editIdx, setEditIdx] = useState(null); //index of the bookmark which is been editing
  const [addLinkValid, setAddLinkValid] = useState(false);
  const [editLinkValid, setEditLinkValid] = useState(false);
  const newLink = useRef(""); //reference of the input user inputs
  const editingLink = useRef(""); //reference of the link user editing
  const maxLinks = 20; //the number of bookmarks each page should show

  const addLink = (e) => {
    e.preventDefault();
    setLinks([{ id: links.length + 1, link: newLink.current.value }, ...links]);
    newLink.current.value = "";
    setCurrentPage(1);
  };

  const addLinkValidate = (e) => {
    e.stopPropagation();
    const target = e.target.attributes.getNamedItem("name").value;
    try {
      const newUrl = new URL(e.target.value);
      if (newUrl.protocol === "http:" || newUrl.protocol === "https:")
        target == "add" ? setAddLinkValid(true) : setEditLinkValid(true);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
      target == "add" ? setAddLinkValid(false) : setEditLinkValid(false);
      return false;
    }
  };

  const deleteLink = (e) => {
    e.stopPropagation();
    const currentLinks = [...links];
    const deleteIdx = currentLinks.findIndex(
      (bookmark) => bookmark.id == e.target.id
    );
    currentLinks.splice(deleteIdx, 1);
    setLinks(currentLinks);
  };

  const deleteAll = () => {
    setLinks([]);
  };

  const editLink = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const currentLinks = [...links];
    const deleteIdx = currentLinks.findIndex(
      (bookmark) => bookmark.id == e.target.attributes.getNamedItem("id").value
    );
    currentLinks[deleteIdx]["link"] = editingLink.current.value;
    setLinks(currentLinks);
    setEditIdx(null);
    editingLink.current.value = "";
  };

  const setPagination = () => {
    if (links.length <= maxLinks) {
      setShownLinks(links);
      setShowPagination(false);
      return;
    }
    //extract bookmarkers that should be shown
    const filteredLinks = [...links].splice(
      (currentPage - 1) * maxLinks,
      maxLinks
    );
    setShownLinks(filteredLinks);
    setPageNum([...Array(Math.ceil(links.length / maxLinks)).keys()]);
    setShowPagination(true);
  };

  function changeCurrentPage(type) {
    switch (type) {
      case "prev":
        setCurrentPage(currentPage - 1);
        break;
      case "next":
        setCurrentPage(currentPage + 1);
        break;
      default:
        return;
    }
  }

  const cancelEdit = (e) => {
    if (
      e.target.value != "Edit BookMar" &&
      e.target.attributes.getNamedItem("class").value != "edit"
    ) {
      setEditIdx(null);
    }
  };

  useEffect(() => {
    const Idx = (currentPage - 1) * maxLinks;
    const filteredLinks = [...links].splice(Idx, maxLinks);
    setShownLinks(filteredLinks);
  }, [currentPage, links]);

  useEffect(() => {
    setPagination();
  }, [links]);

  useEffect(() => {
    window.addEventListener("click", (e) => cancelEdit(e));
    return window.removeEventListener("click", (e) => cancelEdit(e));
  }, []);

  return (
    <div className="App">
      <div className="add-link-container">
        <form onSubmit={addLink}>
          <input
            type="text"
            name="add"
            placeholder="Please input a valid link"
            ref={newLink}
            onChange={addLinkValidate}
          />
          {addLinkValid ? (
            <input type="submit" value="Add BookMark" />
          ) : (
            <input type="submit" value="Add BookMark" disabled />
          )}
        </form>
      </div>
      <div className="book-mark-container">
        {shownLinks.map((bookmark, index) => (
          <div className="book-mark-background">
            <div className="book-mark" key={index}>
              <div className="link-cotainer">
                {editIdx === bookmark.id && (
                  <form id={bookmark.id} onSubmit={editLink}>
                    <input
                      type="text"
                      name="edit"
                      placeholder={bookmark.link}
                      ref={editingLink}
                      onChange={addLinkValidate}
                    />
                    {editLinkValid ? (
                      <input type="submit" value="Edit BookMark" />
                    ) : (
                      <input type="submit" value="Edit BookMark" disabled />
                    )}
                  </form>
                )}
                {(!editIdx || editIdx !== bookmark.id) && (
                  <p>{bookmark.link}</p>
                )}
              </div>
              <div className="btn-container">
                <button
                  className="delete"
                  id={bookmark.id}
                  onClick={deleteLink}
                >
                  𝖷
                </button>
                {
                  <a target="_blank" href={bookmark.link}>
                    🔗
                  </a>
                }
                {(!editIdx || editIdx !== bookmark.id) && (
                  <button
                    className="edit"
                    id={bookmark.id}
                    onClick={() => setEditIdx(bookmark.id)}
                  >
                    🖍
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPagination && (
        <div className="pagination">
          <button
            className={currentPage !== 1 ? "prev show" : "prev hide"}
            onClick={() => changeCurrentPage("prev")}
          >
            ▸
          </button>
          {pageNum.map((page, index) => (
            <span
              key={index}
              className={currentPage === page + 1 ? "focused-page" : "page"}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </span>
          ))}
          <button
            className={currentPage < pageNum.length ? "next show" : "next hide"}
            onClick={() => changeCurrentPage("next")}
          >
            ▸
          </button>
        </div>
      )}
      <button onClick={deleteAll}>delete all</button>
    </div>
  );
}

export default App;
