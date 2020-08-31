import React from 'react';
import './App.css';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

class Gallery extends React.Component{


  constructor(props){
    super(props);
    const { match: { params } } = this.props;

    this.state = { images: [], folderName: params.folder};

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
        <ImageGallery items={this.state.images} />
      </div>
    );
  }
}

export default Gallery;
