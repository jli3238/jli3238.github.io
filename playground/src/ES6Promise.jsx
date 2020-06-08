import React, { useEffect, useState } from 'react';
import PageContainer from '../src/PageContainer';

const ES6Promise = () => {
    
  const [rates, setRates] = useState([]);
  const [ratesError, setRatesError] = useState('');
  const [areRatesLoaded, setAreRatesLoaded] = useState(false);
  const ratesApiUrl = 'data/rates.json';
  const rateRankApiUrl = 'data/rateRank.json';
  useEffect(() => {
    try {
      fetch(ratesApiUrl)
        .then(response1 => { 
          if (response1.ok) {
            return response1.json(); 
          } else { 
            throw Error(response1.statusText); 
          }})
        .then(
          result1 => {
            fetch(rateRankApiUrl)
              .then(response2 => {
                if (response2.ok) {
                  return response2.json();
                } else { 
                  throw Error(response2.statusText); 
                }})
              .then(
                result2 => {
                  setAreRatesLoaded(true);
                  const results = result1.map(res1 => { return { ...res1, rank: result2.find(res2 => res1.name === res2.name).rank }; });
                  setRates(results);
                },
                error2 => {
                  setRatesError(error2);
                }
              )
          },
          error1 => {
            setRatesError(error1);
          }
        )
    } catch (error) {
      setRatesError(error);
    }
  }, []);

  return (
    <PageContainer 
        title='Using ES6 Promise'
        description='Show fetch data using ES6 promise.'>        
        { ratesError !== '' && <div>{ratesError}</div>}
        { areRatesLoaded && <div>Loaded</div>}
        <div>Rates are as follows: </div> 
        <table className="rates-table">
            <thead><tr><th>Name</th><th>Years</th><th>Rate</th><th>Rank</th></tr></thead>
            <tbody>
            { rates && rates.length !== 0 && rates.map(rate => <tr key={rate.name}>
                <td>{rate.name}</td>
                <td>{rate.years}</td>
                <td>{rate.rate}%</td>
                <td>{rate.rank}</td>
            </tr>)}
            </tbody>
        </table>
    </PageContainer>)     
}

export default ES6Promise;