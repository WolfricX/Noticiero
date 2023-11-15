import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

class CondicionesAtmosfericas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

    axios.get(apiUrl)
      .then(response => {
        this.setState({ datos: response.data.results });
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }

  render() {
    const { datos } = this.state;

    return (
      <div>
        <Header />
        <Navbar/>
        <h2>Condiciones Atmosféricas</h2>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ border: '1px solid black' }}>
              <th style={{ border: '1px solid black', padding: '8px' }}>Estado</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Ciudad</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Probabilidad de Precipitacion</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Temperatura</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, index) => (
              <tr key={index} style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{dato.state}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{dato.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{dato.probabilityofprecip} %</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{dato.tempc} grados</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CondicionesAtmosfericas;

  