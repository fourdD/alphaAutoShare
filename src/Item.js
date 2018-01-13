import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : []
    }
  }
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }
    return (
      <tr>
      <button>add</button>
      {/* <td>https://www.youtube.com/watch?v=3G8CM-6BZC4&feature=share</td> */}
      {/* <td>duclt47@gmail.com</td> */}
      <td>
        <FacebookLogin
          appId="555688408131156"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </td>
      <td>
        <div className="fb-share-button" data-href="https://www.youtube.com/watch?v=3G8CM-6BZC4&feature=share" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Chia sẻ</a></div>
      </td>
    </tr>
    );
  }
}

export default Item;
