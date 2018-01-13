import React, { Component } from 'react';
// import './App.css';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: [],
      urlValue: ''
    }
  }
  componentWillMount(){
    var url = [];
    if(JSON.parse(localStorage.getItem('URL')) !== null){
      this.setState({
        url: JSON.parse(localStorage.getItem('URL'))
      })
    }else
      this.setState({
        url: url
    })
  }

  renderUrl = () => {
    var url = JSON.parse(localStorage.getItem('URL'))
    var result = <button type="button" className="btn btn-primary">add link</button>
    if(url !== null) {
      result = url.map((item,index) =>{
        return (
          <tr key={index}>
            <td>{item}</td>
          </tr>
        )
      })
      return result
    }

  }
  onAddLink = () => {
    console.log(this.state.url)
    this.state.url.push(this.state.urlValue)
    this.setState({
      url: this.state.url
    })
    localStorage.setItem('URL',JSON.stringify(this.state.url))
  }
  autoShare = () => {
    var result = this.state.url.map((item)=>{
       item
    })
    return result
  }
  handleKeyPress(target) {
    if(target.charCode==13){
            alert('Enter clicked!!!');    
    }

}
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }
    console.log(this.autoShare())
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">URL</th>
              <th scope="col">Login</th>
              <th scope="col">Share</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" className="btn btn-primary" onClick={()=>this.onAddLink() }>add link</button>
              </td>
              <td>
                <FacebookLogin
                  appId="555688408131156"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                />
              </td>
              <td>
                <div
                  className="fb-share-button"
                  data-href={this.state.url[0]}
                  data-layout="button_count"
                  data-mobile-iframe="true">
                    <a className="fb-xfbml-parse-ignore"
                      target="blank"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Chia sẻ</a>
                </div>
              </td>
            </tr>
              <tr>
                <input onChange={(value)=> this.setState({urlValue : value.target.value})} />
              </tr>
             {this.renderUrl()}
          </tbody>
        </table>
        <input type="text" onKeyPress={this.handleKeyPress} />

      </div>
    );
  }
}

export default App;
