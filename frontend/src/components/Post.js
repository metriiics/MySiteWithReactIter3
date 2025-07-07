export default function Post() {

  return (
    <div>
        <div className="container-content-post">
            
            <div className="content-post-info">
                <img src="/non.jpg" alt="img" className="post-image" />
                <h3 className="title-post">Naming Project</h3>
                <p className="description-post">Description</p>
                <p className="tags-post">C++, C, Py</p>
            </div>

            <div className="content-post-info">
                <img src="/non.jpg" alt="img" className="post-image" />
                <h3 className="title-post">Naming Project</h3>
                <p className="description-post">Description</p>
                <p className="tags-post">C++, C, Py</p>
            </div>

            <div className="content-post-info">
                <img src="/non.jpg" alt="img" className="post-image" />
                <h3 className="title-post">Naming Project</h3>
                <p className="description-post">Description</p>
                <p className="tags-post">C++, C, Py</p>
            </div>

        </div>

        <div className="search-bar">
            <form className="searchForm">
                <input type="text" placeholder="Введите название..." className="search-input"/>
                <div className="filter-options">
                    <label className="filter-label">
                        <input type="checkbox" /> C+
                    </label>
                    <label className="filter-label">
                        <input type="checkbox" /> Python
                    </label>
                    <label className="filter-label">
                        <input type="checkbox" /> Fortran
                    </label>
                </div>
            </form>
        </div>

    </div>
  );
}