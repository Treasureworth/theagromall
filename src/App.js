import React from 'react';
import './App.css';
import HeaderComponent from '../src/components/header'
import { requestUrl } from './assets/utils/constants';
import FarmerLIstComponent from './components/farmer-list';
import ContentLoaderComponent from './components/content-loader';
import { generateKey } from './assets/utils/generate-key';
import {PaginatedList} from 'react-paginated-list'
import FooterComponent from './components/footer';
import { primaryColor } from './assets/theme/color';

export default class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      data : null,
      totalRec: 0,
      imageBaseUrl: ''
    };
  }

  componentDidMount() {
      this.renderMyData();
  }

  renderMyData(){
      fetch(`${requestUrl}100`)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data : responseJson.data.farmers, 
                            imageBaseUrl: responseJson.data.imageBaseUrl,
                            totalRec: responseJson.data.totalRec});
            // console.log(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
  }
  
  render () {
    return (
      <div>
        <div className="header">
          <HeaderComponent/>
        </div>
        <div className="container py-5">
          <div className="row align-items-start table-head">
              <div className="col-3">
                  Name
              </div>
              <div className="col-3 d-none d-sm-flex">
                  Registration No.
              </div>
              <div className="col-2 d-none d-sm-flex">
                  Gender
              </div>
              <div className="col-2 d-none d-sm-flex">
                  Phone Contact
              </div>
              <div className="col-2 d-none d-sm-flex">
                  Date of Birth
              </div>
          </div>
          <div className="mt-4">
    
           {
             this.state.data === null? <ContentLoaderComponent/>:
             <PaginatedList
             list={this.state.data}
             itemsPerPage={10}
             renderList={(list) => (
               <>
                 {list.map(value => {
                   return (
                     <FarmerLIstComponent key={generateKey(6)} imageBaseUrl={this.state.imageBaseUrl} farmers={value} />
                   );
                 })}
               </>
             )}
           />
           }
          </div>
        </div>
        <div className="header" style={{backgroundColor: primaryColor}}>
          <FooterComponent/>
        </div>
      </div>
    );
  }
}

