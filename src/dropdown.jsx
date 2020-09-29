/* 

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage in the ExampleNav component.
  The Dropdown and DropdownItem components have some problems, and also have room for improvements.
  Please fix any obvious bugs you see with the dropdown, and explain your reasoning.
  Please then describe some improvements you would make to the dropdown, and how you would implement them.
  Consider the different contexts in which you might use this dropdown and what changes might be neccessary to make it more flexible.
  
  Follow up question: if we wanted to sync this dropdown selection to the server with app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included
  
  PS: No need to worry about CSS.

 */

import React, {PureComponent} from 'react';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    /* toggle not bound to present class */
    this.toggle = this.toggle.bind(this);
  }
/* toggle method does not mutate the intial state */
  toggle() {
    this.setState((prevState) =>  {
      return {isOpen: !prevState.isOpen}})
  }

  render() {
    /* {isOpen} and {label} needed to be redefined  as {isOpen} would have returned the state object, and {label} would have returned the child props*/
    const isOpen = this.state.isOpen;
    const label = this.props.label;

    return (
      <div className="dropdown">
        {/* aria-expended is an invald aria attribute */}
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={this.toggle}>{label}</button>

        <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
    constructor(props){
      super(props);
      this.state = {
        pages : this.props.page,
        links: this.props.href
      }

    }
  render() {
    let page = <a href={this.state.links}>Page {this.state.pages}</a>;
    return(
      <div>
        {page}
      </div>
    )
    
  }
}

class ExampleNav extends PureComponent {
  constructor(){
    super();
    this.state ={
      fShow : 1,
      sShow : 4,
      tShow : 5,
      arr: [1, 2, 3, 4, 5]
    }
   this.showMore = this.showMore.bind(this)
   this.evenMore = this.evenMore.bind(this)
  }
  showMore(){

  }
  evenMore(){

  }
  render() {
    const pages = this.state.arr.map((page, i) => <DropdownItem key={i} page={page} href={"/page"+page}/>)
    
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
         {pages}
        </Dropdown>
      </nav>
    );
  }
}

export default ExampleNav