import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {clickLinkToPDF} from './helpers/viewHelpers.js';
import routes from './routes.jsx';

class TemplatesView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3 className="entryView">{"Templates"}</h3>
        <table>
            <tbody>
              <tr>
                <th>Template Type</th>
                <th>Download Link</th>
              </tr>
              <tr>
                <td>Bubble Fill</td>
                <td>
                  <a href='/api/pdf' target="_blank">Click here to download pdf</a>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }

}

export default TemplatesView;

