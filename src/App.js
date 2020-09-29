import React from 'react';
import './App.scss';
import Quotes from './Quotes.json'

const jsonQuotes = Quotes.map((entry) => {
  return entry;
});
 //Color that contrast the dark quote-box 
var colors = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#BDBB99", "#77B1A9", "#73A857"];  

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chrome: "#27ae60",
      photo: 1,
      quote: jsonQuotes[1].quote,
      author: jsonQuotes[1].name
    }
    this.getQuote = this.getQuote.bind(this);
  }
  

  getQuote() {
    var randomQuote = jsonQuotes[Math.floor(Math.random() * jsonQuotes.length)];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var bgp = Math.floor(Math.random() * 20);
   
   this.setState({
        chrome: color,
        photo: bgp,
        quote: randomQuote.quote,
        author: randomQuote.name
    })
    
  }
  
    render(){
    var onUse = this.state.photo;
    var quoteText = this.state.quote;
    var quoteAuthor = this.state.author;
    var animeT = {color: this.state.chrome,
        transition: 'color 2.5s, opacity 2.5s',
    }
    var animeP = {backgroundColor: this.state.chrome,
      transition: 'color 2.5s, opacity 2.5s',
  }
    var bodyP = {backgroundImage: `url(/Quote-photos/${onUse}.png)`,
              transition: 'all linear 2.5s',
              height: '100vh',
              width: '100vw'}
  
      return(
        <div id="wrapper" style={bodyP} onLoad={this.getQuote}>
        <div id="quote-box">
    <div className="quote-text" id="quote-text" style={animeT}>
      <i className="fa fa-pen-nib"> </i><span id="text">{this.state.quote}</span>
    </div>
    <div className="quote-author" style={animeT}>
      - <span id="author">{this.state.author}</span>
    </div>
    <div className="buttons">
      <button className="button" id="tweet-quote" style={animeP}><a target="blank" href={`https://twitter.com/intent/tweet?text=${quoteText}--${quoteAuthor}`}><i className="fa fa-twitter"></i></a></button>
      <button className="button" id="new-quote" style={animeP} onClick={this.getQuote}>Reveal <i className="fa fa-book-open"></i></button>
    </div>
  </div>
  <div className="footer"> by <a target="blank" href="https://linkedin.com/in/godwin-obamina">Beewan</a></div>
        </div>
      
      );
    }
}

export default App;
