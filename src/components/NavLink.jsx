function NavLink(props) {
    return (
      <div className="nav-link">
        <a class="link" href={props.href} target="_blank">
          {props.name}
          
        </a>
      </div>
    );
  }
  
  export default NavLink;