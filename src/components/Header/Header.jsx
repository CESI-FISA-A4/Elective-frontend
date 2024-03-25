import './Header.css';


function header ({ title }) {
    return (
        <div className="Title">
          <h1>{ title }</h1>
        </div>
      )
}

export default header;