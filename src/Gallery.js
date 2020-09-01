import React from 'react';
import './App.css';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { Spinner } from 'reactstrap';

class Gallery extends React.Component{


  constructor(props){
    super(props);

    console.log(this.props);
    this.state = { images: [], folderName: this.props.folderName};

}

  componentDidMount(){

    const url = 'https://sleepy-beach-63005.herokuapp.com/photos/download/folder/' + this.state.folderName;

        axios.get(url)
        .then(res => {
            var temp = [];
            for(let i = 0; i < res.data.length; i++){
                let tempImage = {original: "https://sleepy-beach-63005.herokuapp.com/photos/download/" + res.data[i], thumbnail: "https://sleepy-beach-63005.herokuapp.com/photos/download/" + res.data[i]}
                temp.push( tempImage);
            }

            this.setState({images: temp});
        })
  }
  render(){
    return (
      <div className="Gallery">
        {this.state.images.length > 0 ?
        <ImageGallery items={this.state.images}/>
        :<div className="load">
          <Spinner color="white" />
        </div>
        }
      </div>
    );
  }
}

export default Gallery;
